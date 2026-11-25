#!/usr/bin/env node
// One Line, One Laugh — prints the entry line from entry.txt
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const line = readFileSync(join(here, 'entry.txt'), 'utf8').trim();
console.log(line);
