// Seventeen Syllables of Debugging — writes one 5-7-5 haiku about debugging
// to /output/entry.txt. Deterministic: fixed text, no input, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const HAIKU =
  "Breakpoint holds its breath\n" +
  "the log line blinks, then goes still\n" +
  "the bug wore my face\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", HAIKU, "utf8");
