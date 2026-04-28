# etat-des-lieux

Pipeline that turns an architect's dictated audio walk-through into a formatted **état des lieux** (property condition report) as a `.docx`.

```
audio (FR/EN/NL)  ->  STT  ->  editor (Claude)  ->  judge (Claude)  ->  DOCX
```

The editor and judge share a cached system prompt that holds reference documents and style rules, so re-edits and repeated runs hit the prompt cache.

## Status

Skeleton. Stages are wired end-to-end but the system prompts are placeholders — drop your reference docs into `references/`, your DOCX template (when ready) into `templates/`, and sample audio into `samples/`.

## Setup

```bash
python -m venv .venv && source .venv/bin/activate
pip install -e .
cp .env.example .env  # then fill in keys
```

## Run

```bash
etat-des-lieux samples/walk-through.m4a -o out/report.docx
```

## Models & cost

Defaults to `claude-opus-4-7` for both editor and judge. **For the ~€1/document budget, switch to Sonnet** in `.env`:

```
EDITOR_MODEL=claude-sonnet-4-6
JUDGE_MODEL=claude-sonnet-4-6
```

Rough budget with Sonnet 4.6 + caching:

| Stage | Cost |
|---|---|
| Whisper API (~75 min audio) | ~€0.40 |
| Editor (cached refs) | ~€0.30–0.50 |
| Judge (cached refs) | ~€0.20–0.30 |
| Avg one re-edit pass | ~€0.10 |
| **Total** | **~€1.00–€1.30** |

To cut transcription cost to €0, swap the STT backend to local `faster-whisper` (not yet wired).

## Layout

```
src/etat_des_lieux/
  __main__.py     CLI entrypoint
  pipeline.py     orchestrator
  transcribe.py   STT (OpenAI Whisper API)
  edit.py         editor (Claude, cached system prompt)
  judge.py        judge (Claude, cached system prompt, JSON out)
  references.py   loads references/ into the cached system prompt
  assemble.py     markdown -> DOCX (placeholder until template arrives)
  config.py       env vars

prompts/
  editor.md       editor system prompt
  judge.md        judge system prompt

references/       drop reference docs here (.md / .txt for now)
templates/        drop DOCX template here when ready
samples/          test audio
```

## Next steps

- Drop reference docs into `references/`
- Drop a DOCX template into `templates/` and wire `assemble.py` to it
- Add segmentation by location for very long transcripts (>50 pages) to keep individual editor calls within budget
- Optional: swap OpenAI Whisper for local `faster-whisper`
