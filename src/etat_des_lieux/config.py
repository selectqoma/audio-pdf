import os
from pathlib import Path
from dotenv import load_dotenv

load_dotenv()

ROOT = Path(__file__).resolve().parents[2]
PROMPTS_DIR = ROOT / "prompts"
REFERENCES_DIR = ROOT / "references"
TEMPLATES_DIR = ROOT / "templates"

ANTHROPIC_API_KEY = os.environ.get("ANTHROPIC_API_KEY")
OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")
ELEVENLABS_API_KEY = os.environ.get("ELEVENLABS_API_KEY")

EDITOR_MODEL = os.environ.get("EDITOR_MODEL", "claude-opus-4-7")
JUDGE_MODEL = os.environ.get("JUDGE_MODEL", "claude-opus-4-7")

STT_BACKEND = os.environ.get("STT_BACKEND", "elevenlabs")
STT_MODEL = os.environ.get("STT_MODEL", "scribe_v2")
STT_LANGUAGE_CODE = os.environ.get("STT_LANGUAGE_CODE") or None
STT_DIARIZE = os.environ.get("STT_DIARIZE", "true").lower() in {"1", "true", "yes", "on"}
STT_TAG_AUDIO_EVENTS = os.environ.get("STT_TAG_AUDIO_EVENTS", "true").lower() in {"1", "true", "yes", "on"}
STT_NO_VERBATIM = os.environ.get("STT_NO_VERBATIM", "false").lower() in {"1", "true", "yes", "on"}
