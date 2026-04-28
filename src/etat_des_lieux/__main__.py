"""CLI: etat-des-lieux <audio_file> [-o output.docx]"""
import argparse
import sys
from pathlib import Path

from .pipeline import run


def main() -> int:
    parser = argparse.ArgumentParser(prog="etat-des-lieux")
    parser.add_argument("audio", type=Path, help="Audio file (mp3/m4a/wav/...)")
    parser.add_argument("-o", "--out", type=Path, default=None, help="Output DOCX path")
    parser.add_argument("--max-revisions", type=int, default=1)
    args = parser.parse_args()

    if not args.audio.is_file():
        print(f"audio not found: {args.audio}", file=sys.stderr)
        return 2

    out = args.out or args.audio.with_suffix(".docx")
    result = run(args.audio, out, max_revisions=args.max_revisions)
    print(f"\nDone. Judge report: {result.judge_report}")
    print(f"DOCX: {result.docx_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
