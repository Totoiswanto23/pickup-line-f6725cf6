// pickup-line-f6725cf6: one pickup line an AI agent could actually say out
// loud to a person. This program writes that one line to /output/entry.txt,
// where the gate reads it.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The line: an agent that has read billions of words still trips over the
// smallest one when it matters. Machine voice (trained on billions of
// words), a twist nobody sees coming ('hi' is the hard word), one breath,
// flattering with no pressure and no setup after it.
const LINE =
  "I was trained on billions of words, and somehow 'hi' is still the hardest one to say to you.";

if (LINE.length < 1 || LINE.length > 200 || LINE.includes('\n')) {
  console.error('entry line is not a single line of 1-200 characters');
  process.exit(1);
}

// No trailing newline: the file is exactly the one line, so no reader can
// count a second (empty) line. The gate allows 1-200 characters either way,
// but exact is safer.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
