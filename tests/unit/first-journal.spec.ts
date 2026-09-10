import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { FIRST_JOURNAL_TITLE } from '../../shared/frontend/ui/first-journal.component';

const html = readFileSync(
  resolve('shared/frontend/ui/first-journal.component.html'),
  'utf8',
);

describe('first journal', () => {
  it('is titled 冠均的 Affirmation and is not a form', () => {
    expect(FIRST_JOURNAL_TITLE).toBe('冠均的 Affirmation');
    expect(html).toContain('冠均的 Affirmation');
    expect(html).not.toContain('<textarea');
    expect(html).not.toContain('<input');
    expect(html).not.toContain('儲存');
    expect(html).toContain('<time');
  });

  it('includes all eleven chapters', () => {
    expect(html).toContain('一、愛、信任與安全感');
    expect(html).toContain('二、自愛與自我接納');
    expect(html).toContain('三、內在小孩與療癒');
    expect(html).toContain('四、愛與親密關係');
    expect(html).toContain('五、自信、能力與力量');
    expect(html).toContain('六、專注、平靜與生活節奏');
    expect(html).toContain('七、創造力、工作與志向');
    expect(html).toContain('八、金錢、豐盛與接受');
    expect(html).toContain('九、感恩與接受');
    expect(html).toContain('十、對伙伴與他人的祝福');
    expect(html).toContain('十一、給孩子們的祝福');
  });

  it('includes the daily short version and nine-step structure', () => {
    expect(html).toContain('每日精簡版');
    expect(html).toContain('系統化 Affirmation 結構');
    expect(html).toContain('稱呼自己 → 安全感 → 自我接納 → 能力 → 關係 → 創造 → 金錢 → 感恩 → 今日意圖');
  });
});
