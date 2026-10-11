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
    expect(html).toContain('暫隱藏時間');
  });

  it('splits eleven chapters, daily short, structure, and later notes into thirty-five articles', () => {
    expect(Object.keys(JOURNAL_HEADINGS)).toHaveLength(35);
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
    expect(JOURNAL_HEADINGS['affirmation-14']).toBe('我願意理解並且接受你');
    expect(JOURNAL_HEADINGS['affirmation-15']).toBe('愛情裡的安全感');
    expect(JOURNAL_HEADINGS['affirmation-16']).toBe('自信與自我價值');
    expect(JOURNAL_HEADINGS['affirmation-17']).toBe('我的價值不需要透過比較來證明');
    expect(JOURNAL_HEADINGS['affirmation-18']).toBe('我在親密關係中是安全的');
    expect(JOURNAL_HEADINGS['affirmation-19']).toBe('我選擇輕鬆、自在地生活');
    expect(JOURNAL_HEADINGS['affirmation-20']).toBe('我值得被愛、被關心、被重視');
    expect(JOURNAL_HEADINGS['affirmation-21']).toBe('表達真實的自己是安全的');
    expect(JOURNAL_HEADINGS['affirmation-22']).toBe('不同意見與誤會，不代表關係會結束');
    expect(JOURNAL_HEADINGS['affirmation-23']).toBe('我可以輕鬆、自在地做自己');
    expect(JOURNAL_HEADINGS['affirmation-24']).toBe('我在別人心中是重要的');
    expect(JOURNAL_HEADINGS['affirmation-25']).toBe('我值得擁有親密的連結，也允許自己被愛');
    expect(JOURNAL_HEADINGS['affirmation-26']).toBe('我值得被慷慨、體貼地對待');
    expect(JOURNAL_HEADINGS['affirmation-27']).toBe('我的感受、意願與選擇值得被尊重');
    expect(JOURNAL_HEADINGS['affirmation-28']).toBe('我值得被欣賞、被喜歡');
    expect(JOURNAL_HEADINGS['affirmation-29']).toBe('我值得被主動親近、被溫柔地愛');
    expect(JOURNAL_HEADINGS['affirmation-30']).toBe('愛與關係滋養我的創造力');
    expect(JOURNAL_HEADINGS['affirmation-31']).toBe('我值得被支持，我的創造力值得被看見');
    expect(JOURNAL_HEADINGS['affirmation-32']).toBe('我值得與愛的人共同創造美好的生活');
    expect(JOURNAL_HEADINGS['affirmation-33']).toBe('我選擇用有意識的愛與誠懇對待世界');
    expect(JOURNAL_HEADINGS['affirmation-34']).toBe('我值得擁有讓自己安心、被尊重的關係');
    expect(JOURNAL_HEADINGS['affirmation-35']).toBe('我感謝健康的身體，讓我體驗生命的豐盛');
    expect(html).toContain("@case ('affirmation-1')");
    expect(html).toContain("@case ('affirmation-14')");
    expect(html).toContain("@case ('affirmation-34')");
    expect(html).toContain("@case ('affirmation-35')");
    expect(html).toContain('我愛你，冠均。');
    expect(html).toContain('親愛的孩子，我們很高興你來到這個世界。');
    expect(html).toContain('1. 連結自己');
    expect(html).toContain('9. 今日意圖');
    expect(html).toContain('「 也謝謝妳 🥰 」');
    expect(html).toContain('我可以在關係中感到安全、放鬆、被愛，也能自在地信任與溝通。');
    expect(html).toContain('我的身體是我體驗愛、自由、創造力與生命豐盛的重要禮物。');
    expect(html).not.toContain('建議公式');
  });
});
