import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { JOURNAL_HEADINGS, JOURNAL_TITLE } from '../../shared/contracts/journal';

const html = readFileSync(
  resolve('shared/frontend/ui/first-journal.component.html'),
  'utf8',
);

describe('first journal', () => {
  it('is titled 感恩日記 on tiles and is not a form', () => {
    expect(JOURNAL_TITLE).toBe('感恩日記');
    expect(html).toContain('{{ heading() }}');
    expect(html).toContain('journal-corner');
    expect(html).toContain('journal-day');
    expect(html).toContain('{{ dayLabel() }}');
    expect(html).not.toContain('<textarea');
    expect(html).not.toContain('<input');
    expect(html).not.toContain('儲存');
    expect(html).toContain('<time');
  });

  it('splits eleven chapters, daily short, and structure into thirteen articles', () => {
    expect(Object.keys(JOURNAL_HEADINGS)).toHaveLength(13);
    expect(JOURNAL_HEADINGS['affirmation-1']).toBe('愛、信任與安全感');
    expect(JOURNAL_HEADINGS['affirmation-2']).toBe('自愛與自我接納');
    expect(JOURNAL_HEADINGS['affirmation-3']).toBe('內在小孩與療癒');
    expect(JOURNAL_HEADINGS['affirmation-4']).toBe('愛與親密關係');
    expect(JOURNAL_HEADINGS['affirmation-5']).toBe('自信、能力與力量');
    expect(JOURNAL_HEADINGS['affirmation-6']).toBe('專注、平靜與生活節奏');
    expect(JOURNAL_HEADINGS['affirmation-7']).toBe('創造力、工作與志向');
    expect(JOURNAL_HEADINGS['affirmation-8']).toBe('金錢、豐盛與接受');
    expect(JOURNAL_HEADINGS['affirmation-9']).toBe('感恩與接受');
    expect(JOURNAL_HEADINGS['affirmation-10']).toBe('對伙伴與他人的祝福');
    expect(JOURNAL_HEADINGS['affirmation-11']).toBe('給孩子們的祝福');
    expect(JOURNAL_HEADINGS['affirmation-12']).toBe('每日精簡版');
    expect(JOURNAL_HEADINGS['affirmation-13']).toBe('系統化 Affirmation 結構');
    expect(html).toContain("@case ('affirmation-1')");
    expect(html).toContain("@case ('affirmation-12')");
    expect(html).toContain("@case ('affirmation-13')");
    expect(html).toContain('我愛你，冠均。');
    expect(html).toContain('親愛的孩子，我們很高興你來到這個世界。');
    expect(html).toContain('我愛你，冠均。<br />我真的愛你。');
    expect(html).toContain('1. 連結自己');
    expect(html).toContain('9. 今日意圖');
    expect(html).not.toContain('建議公式');
  });
});
