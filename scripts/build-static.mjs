import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const distDir = 'dist';

rmSync(distDir, { recursive: true, force: true });
mkdirSync(distDir, { recursive: true });

for (const file of ['index.html', 'styles.css']) {
  cpSync(file, join(distDir, file));
}

if (existsSync('public')) {
  cpSync('public', distDir, { recursive: true });
}

console.log('Static site built to dist/.');
