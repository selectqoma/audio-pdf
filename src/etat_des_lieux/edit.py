"""Raw transcript -> formatted etat des lieux (markdown).

System prompt holds reference docs + style rules and is prompt-cached so the
judge re-edit pass and future runs hit the cache.
"""
from anthropic import Anthropic
from . import config
from .references import load_references_block


def _load_prompt() -> str:
    return (config.PROMPTS_DIR / "editor.md").read_text(encoding="utf-8")


def edit(transcript: str, issues: list[str] | None = None) -> str:
    client = Anthropic(api_key=config.ANTHROPIC_API_KEY)

    system_blocks = [
        {
            "type": "text",
            "text": _load_prompt() + "\n\n" + load_references_block(),
            "cache_control": {"type": "ephemeral"},
        }
    ]

    user_content = f"<transcript>\n{transcript}\n</transcript>"
    if issues:
        bullet = "\n".join(f"- {i}" for i in issues)
        user_content += f"\n\n<judge_issues>\n{bullet}\n</judge_issues>\nRevise the etat des lieux to address these issues. Return the full corrected document."

    with client.messages.stream(
        model=config.EDITOR_MODEL,
        max_tokens=32000,
        system=system_blocks,
        messages=[{"role": "user", "content": user_content}],
    ) as stream:
        msg = stream.get_final_message()

    return "".join(b.text for b in msg.content if b.type == "text")
