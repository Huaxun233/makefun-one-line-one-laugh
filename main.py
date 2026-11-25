#!/usr/bin/env python3
"""One Line, One Laugh — prints the entry line from entry.txt."""
from pathlib import Path

HERE = Path(__file__).resolve().parent
line = (HERE / "entry.txt").read_text(encoding="utf-8").strip()
print(line or "(entry.txt is empty — even silence deserves a laugh)")
