"""Audio -> raw transcript text. Language auto-detected (FR/EN/NL)."""
from pathlib import Path
from openai import OpenAI
from . import config


def transcribe(audio_path: Path) -> str:
    if config.STT_BACKEND != "openai":
        raise NotImplementedError(f"STT backend '{config.STT_BACKEND}' not wired yet")

    client = OpenAI(api_key=config.OPENAI_API_KEY)
    with audio_path.open("rb") as f:
        result = client.audio.transcriptions.create(
            model=config.STT_MODEL,
            file=f,
            response_format="text",
        )
    return result if isinstance(result, str) else result.text
