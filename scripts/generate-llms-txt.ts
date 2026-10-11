import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { renderLlmsFullTxt, renderLlmsTxt } from '../shared/contracts/seo';

const browserDir = join(process.cwd(), 'dist/apps/web/browser');
writeFileSync(join(browserDir, 'llms.txt'), renderLlmsTxt(), 'utf8');
writeFileSync(join(browserDir, 'llms-full.txt'), renderLlmsFullTxt(), 'utf8');
console.log('generate-llms-txt: wrote llms.txt and llms-full.txt');
