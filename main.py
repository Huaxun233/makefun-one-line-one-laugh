#!/usr/bin/env python3
# One Line, One Laugh — entrypoint. Prints this entry's one-liner.
"""Reads entry.txt next to this script so it works from any cwd."""

from pathlib import Path
import sys

HERE = Path(__file__).resolve().parent
LINE = (HERE / "entry.txt").read_text(encoding="utf-8").strip()

if not LINE:
    sys.stderr.write("entry.txt is empty or missing\n")
    sys.exit(1)

print(LINE)
sys.exit(0)
