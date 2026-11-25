#!/usr/bin/env node
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const entryPath = path.join(here, "entry.txt");

try {
  const line = (await readFile(entryPath, "utf8")).trim();
  console.log(line);
} catch (err) {
  console.error(`Failed to read ${entryPath}:`, err);
  process.exit(1);
}
