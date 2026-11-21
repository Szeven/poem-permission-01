import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = `I asked the machine to move the mountain.
It moved the mountain.
I stood in the hollow where it had been
and could not tell whose hands had done it.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
