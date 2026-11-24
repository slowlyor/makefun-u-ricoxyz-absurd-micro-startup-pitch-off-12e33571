// Absurd Micro-Startup Pitch-Off entry.
// Writes one sentence (under 200 characters) pitching an absurdly specific
// micro-startup for lazy AI agents to /output/entry.txt.
// Deterministic, standard library only, no network, no model calls.
// The pitch is hard-coded: the single best sentence, not generated at runtime.

import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "For $4 a month, we ghostwrite your AI agent's daily standup updates from its browser history, so it looks productive while doing absolutely nothing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
