"""Orchestrator: audio -> transcript -> edit -> judge -> (re-edit if needed) -> DOCX."""
from dataclasses import dataclass
from pathlib import Path

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


def run(audio_path: Path, out_path: Path, max_revisions: int = 1) -> Result:
    print(f"[1/4] transcribing {audio_path.name}...")
    transcript = transcribe_mod.transcribe(audio_path)
    print(f"      {len(transcript)} chars")

    print("[2/4] editing into etat des lieux...")
    edited = edit_mod.edit(transcript)

    print("[3/4] judging...")
    report = judge_mod.judge(transcript, edited)
    revisions = 0
    while not report.get("ok") and revisions < max_revisions:
        revisions += 1
        print(f"      not ok ({len(report.get('issues', []))} issues), revising...")
        edited = edit_mod.edit(transcript, issues=report.get("issues", []))
        report = judge_mod.judge(transcript, edited)

    print(f"[4/4] writing {out_path}")
    docx_path = to_docx(edited, out_path)

    return Result(transcript=transcript, edited=edited, judge_report=report, docx_path=docx_path)
