import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { JOURNALS } from '../shared/contracts/journal';
import { applyJournalShareMetaHtml } from '../shared/contracts/seo';

const browserDir = join(process.cwd(), 'dist/apps/web/browser');
const indexPath = join(browserDir, 'index.html');
const indexHtml = readFileSync(indexPath, 'utf8');

for (const journal of JOURNALS) {
  const dir = join(browserDir, 'journals', journal.id);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), applyJournalShareMetaHtml(indexHtml, journal.id), 'utf8');
}

console.log(`inject-journal-og: wrote ${JOURNALS.length} journal HTML shells`);
