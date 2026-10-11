import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';
import { JOURNALS, journalDayLabel, journalSubtitle } from '../shared/contracts/journal';
import { SITE_NAME, SITE_OG_IMAGE_HEIGHT, SITE_OG_IMAGE_WIDTH } from '../shared/contracts/seo';

const WIDTH = Number(SITE_OG_IMAGE_WIDTH);
const HEIGHT = Number(SITE_OG_IMAGE_HEIGHT);
const outDir = join(process.cwd(), 'dist/apps/web/browser/og');

function wrapText(text: string, maxChars: number): string[] {
  const lines: string[] = [];
  let current = '';
  for (const char of text) {
    current += char;
    if (current.length >= maxChars) {
      lines.push(current);
      current = '';
    }
  }
  if (current) {
    lines.push(current);
  }
  return lines.slice(0, 4);
}

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function buildSvg(id: string): string {
  const day = journalDayLabel(id);
  const heading = journalSubtitle(id);
  const lines = wrapText(heading, 14);
  const titleTspans = lines
    .map((line, index) => {
      const dy = index === 0 ? 0 : 64;
      return `<tspan x="80" dy="${dy}">${escapeXml(line)}</tspan>`;
    })
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#f2f2f2"/>
  <rect x="0" y="0" width="16" height="100%" fill="#1a1a1a"/>
  <text x="80" y="120" font-family="system-ui, -apple-system, 'Noto Sans TC', sans-serif" font-size="34" fill="#666666">${escapeXml(`感恩日記 · ${day}`)}</text>
  <text x="80" y="240" font-family="system-ui, -apple-system, 'Noto Sans TC', sans-serif" font-size="54" font-weight="700" fill="#1a1a1a">${titleTspans}</text>
  <text x="80" y="560" font-family="system-ui, -apple-system, 'Noto Sans TC', sans-serif" font-size="28" fill="#888888">${escapeXml(SITE_NAME)}</text>
</svg>`;
}

mkdirSync(outDir, { recursive: true });

for (const journal of JOURNALS) {
  const svg = Buffer.from(buildSvg(journal.id));
  const png = await sharp(svg).png().toBuffer();
  writeFileSync(join(outDir, `${journal.id}.png`), png);
}

console.log(`generate-journal-og-images: wrote ${JOURNALS.length} PNGs to ${outDir}`);
