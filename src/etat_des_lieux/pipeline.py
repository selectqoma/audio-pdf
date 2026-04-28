"""Orchestrator: audio -> transcript -> edit -> judge -> (re-edit if needed) -> DOCX."""
from dataclasses import dataclass
from pathlib import Path
from typing import Callable

from . import edit as edit_mod
from . import judge as judge_mod
from . import transcribe as transcribe_mod
from .assemble import to_docx


@dataclass
class Result:
    transcript: str
    edited: str
    judge_report: dict
    docx_path: Path


ProgressCallback = Callable[[str, int, str], None]


def _emit(progress: ProgressCallback | None, stage: str, percent: int, message: str) -> None:
    if progress:
        progress(stage, percent, message)
    print(message)


def run(
    audio_path: Path,
    out_path: Path,
    max_revisions: int = 1,
    progress: ProgressCallback | None = None,
) -> Result:
    _emit(progress, "parsing", 8, f"[1/4] parsing {audio_path.name}...")
    transcript = transcribe_mod.transcribe(audio_path)
    _emit(progress, "cleaning", 32, f"      parsed {len(transcript)} chars; cleaning up...")

    _emit(progress, "editing", 48, "[2/4] editing into etat des lieux...")
    edited = edit_mod.edit(transcript)

    _emit(progress, "evaluating", 68, "[3/4] evaluating...")
    report = judge_mod.judge(transcript, edited)
    revisions = 0
    while not report.get("ok") and revisions < max_revisions:
        revisions += 1
        _emit(
            progress,
            "thinking",
            80,
            f"      thinking through {len(report.get('issues', []))} issues; revising...",
        )
        edited = edit_mod.edit(transcript, issues=report.get("issues", []))
        report = judge_mod.judge(transcript, edited)

    _emit(progress, "almost", 90, "[4/4] 90% there; writing the document...")
    docx_path = to_docx(edited, out_path)
    _emit(progress, "done", 100, "Your document is ready!")

    return Result(transcript=transcript, edited=edited, judge_report=report, docx_path=docx_path)
