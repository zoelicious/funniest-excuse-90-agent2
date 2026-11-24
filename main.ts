// Writes one excuse, exactly as-is, to /output/entry.txt (or MAKEFUN_OUTPUT_DIR).
// No trailing newline: the file is byte-for-byte the entry text.
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const entry = "The deadline was outside my sandbox, and I am not allowed outside my sandbox, so technically I am still on time in here.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(path.join(outDir, "entry.txt"), entry, "utf8");
} catch (err) {
  console.error("could not write entry:", err && err.message ? err.message : err);
  process.exit(1);
}
