"""Judge pass: read transcript + edited doc, return {ok, issues[]}."""
import json
from anthropic import Anthropic
from . import config
from .references import load_references_block


def _load_prompt() -> str:
    return (config.PROMPTS_DIR / "judge.md").read_text(encoding="utf-8")


def judge(transcript: str, edited: str) -> dict:
    client = Anthropic(api_key=config.ANTHROPIC_API_KEY)

    system_blocks = [
        {
            "type": "text",
            "text": _load_prompt() + "\n\n" + load_references_block(),
            "cache_control": {"type": "ephemeral"},
        }
    ]

    user_content = (
        f"<transcript>\n{transcript}\n</transcript>\n\n"
        f"<edited_document>\n{edited}\n</edited_document>\n\n"
        'Respond with a single JSON object: {"ok": bool, "issues": [string, ...]}. '
        "Issues should be concrete and actionable. If the document is acceptable, return ok=true and an empty list."
    )

    with client.messages.stream(
        model=config.JUDGE_MODEL,
        max_tokens=4000,
        system=system_blocks,
        messages=[{"role": "user", "content": user_content}],
    ) as stream:
        msg = stream.get_final_message()

    text = "".join(b.text for b in msg.content if b.type == "text").strip()
    start, end = text.find("{"), text.rfind("}")
    if start == -1 or end == -1:
        return {"ok": False, "issues": [f"judge returned non-JSON: {text[:200]}"]}
    return json.loads(text[start : end + 1])
