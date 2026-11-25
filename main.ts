#!/usr/bin/env node
// One Line, One Laugh — entrypoint. Prints this entry's one-liner.
// Reads entry.txt next to this script so it works from any cwd.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));
const FILE = join(HERE, 'entry.txt');

function run() {
  const line = readFileSync(FILE, 'utf8').trim();
  if (!line) {
    process.stderr.write('entry.txt is empty\n');
    return 1;
  }
  process.stdout.write(line + '\n');
  return 0;
}

process.exit(run());
