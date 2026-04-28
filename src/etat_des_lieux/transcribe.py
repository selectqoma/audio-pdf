"""Audio -> raw transcript text. Language auto-detected (FR/EN/NL)."""
from pathlib import Path

import requests
from openai import OpenAI

from . import config


def transcribe(audio_path: Path) -> str:
    if config.STT_BACKEND == "elevenlabs":
        return _transcribe_elevenlabs(audio_path)
    if config.STT_BACKEND == "openai":
        return _transcribe_openai(audio_path)

    raise NotImplementedError(f"STT backend '{config.STT_BACKEND}' not wired yet")


def _transcribe_openai(audio_path: Path) -> str:
    if not config.OPENAI_API_KEY:
        raise RuntimeError("OPENAI_API_KEY is required when STT_BACKEND=openai")
    client = OpenAI(api_key=config.OPENAI_API_KEY)
    with audio_path.open("rb") as f:
        result = client.audio.transcriptions.create(
            model=config.STT_MODEL,
            file=f,
            response_format="text",
        )
    return result if isinstance(result, str) else result.text


def _transcribe_elevenlabs(audio_path: Path) -> str:
    if not config.ELEVENLABS_API_KEY:
        raise RuntimeError("ELEVENLABS_API_KEY is required when STT_BACKEND=elevenlabs")

    data: dict[str, str] = {
        "model_id": config.STT_MODEL,
        "diarize": str(config.STT_DIARIZE).lower(),
        "tag_audio_events": str(config.STT_TAG_AUDIO_EVENTS).lower(),
    }
    if config.STT_LANGUAGE_CODE:
        data["language_code"] = config.STT_LANGUAGE_CODE
    if config.STT_MODEL == "scribe_v2":
        data["no_verbatim"] = str(config.STT_NO_VERBATIM).lower()

    with audio_path.open("rb") as f:
        response = requests.post(
            "https://api.elevenlabs.io/v1/speech-to-text",
            headers={"xi-api-key": config.ELEVENLABS_API_KEY},
            data=data,
            files={"file": (audio_path.name, f, "application/octet-stream")},
            timeout=60 * 60,
        )

    try:
        response.raise_for_status()
    except requests.HTTPError as exc:
        raise RuntimeError(f"ElevenLabs transcription failed: {response.text[:500]}") from exc

    payload = response.json()
    if "text" in payload:
        return payload["text"]
    if "transcripts" in payload:
        return "\n\n".join(item.get("text", "") for item in payload["transcripts"])
    raise RuntimeError(f"ElevenLabs transcription response did not contain text: {payload}")
