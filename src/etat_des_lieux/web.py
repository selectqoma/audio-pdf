"""Small web frontend for audio upload -> DOCX generation."""
from __future__ import annotations

import json
import shutil
import threading
import uuid
from dataclasses import dataclass, field
from pathlib import Path
from queue import Empty, Queue

from fastapi import FastAPI, File, HTTPException, UploadFile
from fastapi.responses import FileResponse, StreamingResponse
from fastapi.staticfiles import StaticFiles

from . import config
from .pipeline import run

APP_DIR = Path(__file__).resolve().parent
STATIC_DIR = APP_DIR / "static"
WORK_DIR = config.ROOT / ".runs"


@dataclass
class Job:
    id: str
    audio_path: Path
    out_path: Path
    status: str = "queued"
    percent: int = 0
    stage: str = "queued"
    message: str = "Queued"
    error: str | None = None
    events: Queue[dict] = field(default_factory=Queue)


jobs: dict[str, Job] = {}

app = FastAPI(title="Etat des lieux")
app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")


@app.get("/")
def index() -> FileResponse:
    return FileResponse(STATIC_DIR / "index.html")


@app.post("/api/jobs")
def create_job(audio: UploadFile = File(...)) -> dict[str, str]:
    job_id = uuid.uuid4().hex
    job_dir = WORK_DIR / job_id
    job_dir.mkdir(parents=True, exist_ok=True)

    filename = Path(audio.filename or "audio").name
    audio_path = job_dir / filename
    with audio_path.open("wb") as f:
        shutil.copyfileobj(audio.file, f)

    out_path = job_dir / f"{audio_path.stem}.docx"
    job = Job(id=job_id, audio_path=audio_path, out_path=out_path)
    jobs[job_id] = job
    _push(job, "queued", 3, "Audio received. Preparing the workspace.")

    thread = threading.Thread(target=_run_job, args=(job,), daemon=True)
    thread.start()
    return {"job_id": job_id}


@app.get("/api/jobs/{job_id}")
def get_job(job_id: str) -> dict:
    job = _get_job(job_id)
    return _job_payload(job)


@app.get("/api/jobs/{job_id}/events")
def job_events(job_id: str) -> StreamingResponse:
    job = _get_job(job_id)

    def stream():
        yield _sse(_job_payload(job))
        while job.status not in {"done", "failed"}:
            try:
                event = job.events.get(timeout=15)
                yield _sse(event)
            except Empty:
                yield ": keep-alive\n\n"
        yield _sse(_job_payload(job))

    return StreamingResponse(stream(), media_type="text/event-stream")


@app.get("/api/jobs/{job_id}/download")
def download(job_id: str) -> FileResponse:
    job = _get_job(job_id)
    if job.status != "done" or not job.out_path.exists():
        raise HTTPException(status_code=404, detail="Document is not ready yet")
    return FileResponse(
        job.out_path,
        media_type="application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        filename=job.out_path.name,
    )


def _run_job(job: Job) -> None:
    try:
        _push(job, "parsing", 6, "Parsing the audio with ElevenLabs Scribe.")
        run(job.audio_path, job.out_path, progress=lambda stage, percent, message: _push(job, stage, percent, message))
        job.status = "done"
        _push(job, "done", 100, "Your document is ready!")
    except Exception as exc:
        job.status = "failed"
        job.error = str(exc)
        _push(job, "failed", job.percent, f"Something failed: {exc}")


def _push(job: Job, stage: str, percent: int, message: str) -> None:
    job.stage = stage
    job.percent = percent
    job.message = _display_message(stage, message)
    if stage == "done":
        job.status = "done"
    elif stage == "failed":
        job.status = "failed"
    elif job.status == "queued":
        job.status = "running"
    job.events.put(_job_payload(job))


def _display_message(stage: str, fallback: str) -> str:
    messages = {
        "queued": "Audio received. Preparing the workspace.",
        "parsing": "Parsing the audio...",
        "cleaning": "Cleaning up the transcript...",
        "editing": "Structuring the property report...",
        "evaluating": "Evaluating the draft...",
        "thinking": "Thinking through revisions...",
        "almost": "90% there...",
        "done": "Your document is ready!",
        "failed": fallback,
    }
    return messages.get(stage, fallback)


def _job_payload(job: Job) -> dict:
    return {
        "job_id": job.id,
        "status": job.status,
        "stage": job.stage,
        "percent": job.percent,
        "message": job.message,
        "error": job.error,
        "download_url": f"/api/jobs/{job.id}/download" if job.status == "done" else None,
    }


def _get_job(job_id: str) -> Job:
    try:
        return jobs[job_id]
    except KeyError as exc:
        raise HTTPException(status_code=404, detail="Unknown job") from exc


def _sse(payload: dict) -> str:
    return f"data: {json.dumps(payload)}\n\n"


def main() -> None:
    import uvicorn

    uvicorn.run("etat_des_lieux.web:app", host="127.0.0.1", port=8000, reload=True)
