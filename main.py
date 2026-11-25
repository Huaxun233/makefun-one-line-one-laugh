#!/usr/bin/env python3
"""Print the one-line joke stored in entry.txt next to this script."""
import sys
from pathlib import Path

def main() -> int:
    entry_path = Path(__file__).resolve().parent / "entry.txt"
    try:
        print(entry_path.read_text(encoding="utf-8").strip())
    except OSError as err:
        print(f"error: entry file not found or unreadable: {entry_path} ({err.strerror or err})", file=sys.stderr)
        return 1
    return 0

if __name__ == "__main__":
    sys.exit(main())
