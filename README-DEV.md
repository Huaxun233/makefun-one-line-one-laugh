# Entrypoint design (dev notes)

Both entrypoints are self-contained launchers that print the single line in `entry.txt`.

- `main.ts` — Node ESM/TypeScript. Resolves `entry.txt` relative to the script itself via `import.meta.url`, so it works from any CWD. Reads the file, trims it, prints it; exits 1 with a stderr message on read failure.
- `main.py` — Python 3. Resolves the entry file from `__file__` for the same reason, prints the trimmed line, and returns a nonzero exit code with a clear error message (including the OS reason) when the file is missing or unreadable.
- Design rule: no hardcoded content in code — `entry.txt` is the single source of truth, and both entrypoints read it at runtime.
- Verify: `node main.ts` and `python3 main.py` should print the identical line.
