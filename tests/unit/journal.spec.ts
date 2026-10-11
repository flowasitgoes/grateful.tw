import { describe, expect, it } from 'vitest';
import {
  JOURNAL_COUNT,
  JOURNALS,
  formatJournalDateTime,
  journalAdjacent,
  journalDayLabel,
  journalSubtitle,
  journalsNewestFirst,
} from '../../shared/contracts/journal';

describe('journalsNewestFirst', () => {
  it('puts newer createdAt first', () => {
    const sorted = journalsNewestFirst([
      { id: 'old', title: '舊', createdAt: '2026-01-01T00:00:00+08:00' },
      { id: 'new', title: '新', createdAt: '2026-09-10T17:08:00+08:00' },
    ]);
    expect(sorted.map((item) => item.id)).toEqual(['new', 'old']);
  });
});

describe('formatJournalDateTime', () => {
  it('formats Taipei time as YYYY-MM-DD HH:mm', () => {
    expect(formatJournalDateTime('2026-09-10T17:08:00+08:00')).toBe('2026-09-10 17:08');
  });
});

describe('JOURNALS', () => {
  it('has thirty-five entries, newest first is Day 35 / affirmation-35', () => {
    expect(JOURNALS).toHaveLength(JOURNAL_COUNT);
    expect(JOURNALS[0]?.id).toBe('affirmation-1');
    expect(JOURNALS[0]?.createdAt).toBe('2026-09-01T17:08:00+08:00');
    expect(JOURNALS[12]?.id).toBe('affirmation-13');
    expect(JOURNALS[12]?.createdAt).toBe('2026-09-13T17:08:00+08:00');
    expect(JOURNALS[13]?.id).toBe('affirmation-14');
    expect(JOURNALS[13]?.createdAt).toBe('2026-10-10T22:18:00+08:00');
    expect(JOURNALS[33]?.id).toBe('affirmation-34');
    expect(JOURNALS[33]?.createdAt).toBe('2026-10-12T01:00:00+08:00');
    expect(JOURNALS[34]?.id).toBe('affirmation-35');
    expect(JOURNALS[34]?.createdAt).toBe('2026-10-12T01:01:00+08:00');
    expect(journalsNewestFirst()[0]?.id).toBe('affirmation-35');
  });
});

describe('journalDayLabel', () => {
  it('maps affirmation-n to Day n', () => {
    expect(journalDayLabel('affirmation-1')).toBe('Day 1');
    expect(journalDayLabel('affirmation-12')).toBe('Day 12');
    expect(journalDayLabel('affirmation-13')).toBe('Day 13');
    expect(journalDayLabel('affirmation-14')).toBe('Day 14');
    expect(journalDayLabel('affirmation-15')).toBe('Day 15');
    expect(journalDayLabel('affirmation-16')).toBe('Day 16');
    expect(journalDayLabel('affirmation-17')).toBe('Day 17');
    expect(journalDayLabel('affirmation-18')).toBe('Day 18');
    expect(journalDayLabel('affirmation-19')).toBe('Day 19');
    expect(journalDayLabel('affirmation-20')).toBe('Day 20');
    expect(journalDayLabel('affirmation-21')).toBe('Day 21');
    expect(journalDayLabel('affirmation-22')).toBe('Day 22');
    expect(journalDayLabel('affirmation-23')).toBe('Day 23');
    expect(journalDayLabel('affirmation-24')).toBe('Day 24');
    expect(journalDayLabel('affirmation-25')).toBe('Day 25');
    expect(journalDayLabel('affirmation-26')).toBe('Day 26');
    expect(journalDayLabel('affirmation-27')).toBe('Day 27');
    expect(journalDayLabel('affirmation-28')).toBe('Day 28');
    expect(journalDayLabel('affirmation-29')).toBe('Day 29');
    expect(journalDayLabel('affirmation-30')).toBe('Day 30');
    expect(journalDayLabel('affirmation-31')).toBe('Day 31');
    expect(journalDayLabel('affirmation-32')).toBe('Day 32');
    expect(journalDayLabel('affirmation-33')).toBe('Day 33');
    expect(journalDayLabel('affirmation-34')).toBe('Day 34');
    expect(journalDayLabel('affirmation-35')).toBe('Day 35');
  });
});

describe('journalSubtitle', () => {
  it('uses chapter name without numeral prefix', () => {
    expect(journalSubtitle('affirmation-1')).toBe('愛、信任與安全感');
    expect(journalSubtitle('affirmation-11')).toBe('給孩子們的祝福');
    expect(journalSubtitle('affirmation-12')).toBe('每日精簡版');
    expect(journalSubtitle('affirmation-13')).toBe('系統化 Affirmation 結構');
    expect(journalSubtitle('affirmation-14')).toBe('我願意理解並且接受你');
    expect(journalSubtitle('affirmation-15')).toBe('愛情裡的安全感');
    expect(journalSubtitle('affirmation-16')).toBe('自信與自我價值');
    expect(journalSubtitle('affirmation-17')).toBe('我的價值不需要透過比較來證明');
    expect(journalSubtitle('affirmation-18')).toBe('我在親密關係中是安全的');
    expect(journalSubtitle('affirmation-19')).toBe('我選擇輕鬆、自在地生活');
    expect(journalSubtitle('affirmation-20')).toBe('我值得被愛、被關心、被重視');
    expect(journalSubtitle('affirmation-21')).toBe('表達真實的自己是安全的');
    expect(journalSubtitle('affirmation-22')).toBe('不同意見與誤會，不代表關係會結束');
    expect(journalSubtitle('affirmation-23')).toBe('我可以輕鬆、自在地做自己');
    expect(journalSubtitle('affirmation-24')).toBe('我在別人心中是重要的');
    expect(journalSubtitle('affirmation-25')).toBe('我值得擁有親密的連結，也允許自己被愛');
    expect(journalSubtitle('affirmation-26')).toBe('我值得被慷慨、體貼地對待');
    expect(journalSubtitle('affirmation-27')).toBe('我的感受、意願與選擇值得被尊重');
    expect(journalSubtitle('affirmation-28')).toBe('我值得被欣賞、被喜歡');
    expect(journalSubtitle('affirmation-29')).toBe('我值得被主動親近、被溫柔地愛');
    expect(journalSubtitle('affirmation-30')).toBe('愛與關係滋養我的創造力');
    expect(journalSubtitle('affirmation-31')).toBe('我值得被支持，我的創造力值得被看見');
    expect(journalSubtitle('affirmation-32')).toBe('我值得與愛的人共同創造美好的生活');
    expect(journalSubtitle('affirmation-33')).toBe('我選擇用有意識的愛與誠懇對待世界');
    expect(journalSubtitle('affirmation-34')).toBe('我值得擁有讓自己安心、被尊重的關係');
    expect(journalSubtitle('affirmation-35')).toBe('我感謝健康的身體，讓我體驗生命的豐盛');
  });
});

describe('journalAdjacent', () => {
  it('walks Day order for previous and next links', () => {
    expect(journalAdjacent('affirmation-1').prev).toBeUndefined();
    expect(journalAdjacent('affirmation-1').next?.id).toBe('affirmation-2');
    expect(journalAdjacent('affirmation-35').prev?.id).toBe('affirmation-34');
    expect(journalAdjacent('affirmation-35').next).toBeUndefined();
    expect(journalAdjacent('affirmation-20').prev?.id).toBe('affirmation-19');
    expect(journalAdjacent('affirmation-20').next?.id).toBe('affirmation-21');
  });
});
