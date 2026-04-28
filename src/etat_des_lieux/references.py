"""Loads any reference docs the user drops into references/ into a single text block.

Supports plain text/markdown for now. PDFs/DOCX can be added when materials arrive.
Returns a placeholder string when the directory is empty so prompts still cache cleanly.
"""
from . import config


def load_references_block() -> str:
    refs = sorted(config.REFERENCES_DIR.glob("*"))
    text_files = [p for p in refs if p.is_file() and p.suffix.lower() in {".md", ".txt"} and p.name != ".gitkeep"]
    if not text_files:
        return "<reference_documents>\n(no reference documents provided yet)\n</reference_documents>"

    parts = ["<reference_documents>"]
    for p in text_files:
        parts.append(f"\n--- {p.name} ---\n{p.read_text(encoding='utf-8')}")
    parts.append("\n</reference_documents>")
    return "\n".join(parts)
