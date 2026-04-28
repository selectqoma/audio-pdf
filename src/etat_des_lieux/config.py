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

EDITOR_MODEL = os.environ.get("EDITOR_MODEL", "claude-opus-4-7")
JUDGE_MODEL = os.environ.get("JUDGE_MODEL", "claude-opus-4-7")

STT_BACKEND = os.environ.get("STT_BACKEND", "openai")
STT_MODEL = os.environ.get("STT_MODEL", "whisper-1")
