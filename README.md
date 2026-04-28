# etat-des-lieux

Pipeline that turns an architect's dictated audio walk-through into a formatted **état des lieux** (property condition report) as a `.docx`.

```
audio (FR/EN/NL)  ->  ElevenLabs Scribe  ->  editor (Claude)  ->  judge (Claude)  ->  DOCX
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

Or run the upload UI:

```bash
etat-des-lieux-web
```

Then open http://127.0.0.1:8000.

## Models & cost

Defaults to `claude-opus-4-7` for both editor and judge. **For the ~€1/document budget, switch to Sonnet** in `.env`:

```
EDITOR_MODEL=claude-sonnet-4-6
JUDGE_MODEL=claude-sonnet-4-6
```

Rough budget with Sonnet 4.6 + caching:

| Stage | Cost |
|---|---|
| ElevenLabs Scribe (~75 min audio) | depends on ElevenLabs plan/pricing |
| Editor (cached refs) | ~€0.30–0.50 |
| Judge (cached refs) | ~€0.20–0.30 |
| Avg one re-edit pass | ~€0.10 |
| **Total** | **~€1.00–€1.30** |

To use OpenAI Whisper instead, set `STT_BACKEND=openai` and `STT_MODEL=whisper-1`.

## Layout

```
src/etat_des_lieux/
  __main__.py     CLI entrypoint
  pipeline.py     orchestrator
  transcribe.py   STT (ElevenLabs Scribe or OpenAI Whisper API)
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

## Frontend

The web app lives in `src/etat_des_lieux/web.py` with static assets in
`src/etat_des_lieux/static/`. Uploading an audio file creates a background job,
streams progress events to the browser, and exposes the generated DOCX when the
pipeline completes.

## Next steps

- Drop reference docs into `references/`
- Drop a DOCX template into `templates/` and wire `assemble.py` to it
- Add segmentation by location for very long transcripts (>50 pages) to keep individual editor calls within budget
- Optional: swap OpenAI Whisper for local `faster-whisper`
