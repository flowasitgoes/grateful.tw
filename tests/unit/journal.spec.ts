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
  it('has fifty-three entries, newest first is Day 53 / affirmation-53', () => {
    expect(JOURNALS).toHaveLength(JOURNAL_COUNT);
    expect(JOURNALS[0]?.id).toBe('affirmation-1');
    expect(JOURNALS[0]?.createdAt).toBe('2026-09-01T17:08:00+08:00');
    expect(JOURNALS[12]?.id).toBe('affirmation-13');
    expect(JOURNALS[12]?.createdAt).toBe('2026-09-13T17:08:00+08:00');
    expect(JOURNALS[13]?.id).toBe('affirmation-14');
    expect(JOURNALS[13]?.createdAt).toBe('2026-10-10T22:18:00+08:00');
    expect(JOURNALS[48]?.id).toBe('affirmation-49');
    expect(JOURNALS[48]?.createdAt).toBe('2026-10-13T10:30:00+08:00');
    expect(JOURNALS[49]?.id).toBe('affirmation-50');
    expect(JOURNALS[49]?.createdAt).toBe('2026-10-13T10:32:00+08:00');
    expect(JOURNALS[50]?.id).toBe('affirmation-51');
    expect(JOURNALS[50]?.createdAt).toBe('2026-10-14T11:21:00+08:00');
    expect(JOURNALS[51]?.id).toBe('affirmation-52');
    expect(JOURNALS[51]?.createdAt).toBe('2026-10-14T11:24:00+08:00');
    expect(JOURNALS[52]?.id).toBe('affirmation-53');
    expect(JOURNALS[52]?.createdAt).toBe('2026-10-14T11:30:00+08:00');
    expect(journalsNewestFirst()[0]?.id).toBe('affirmation-53');
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
    expect(journalDayLabel('affirmation-36')).toBe('Day 36');
    expect(journalDayLabel('affirmation-37')).toBe('Day 37');
    expect(journalDayLabel('affirmation-38')).toBe('Day 38');
    expect(journalDayLabel('affirmation-39')).toBe('Day 39');
    expect(journalDayLabel('affirmation-40')).toBe('Day 40');
    expect(journalDayLabel('affirmation-41')).toBe('Day 41');
    expect(journalDayLabel('affirmation-42')).toBe('Day 42');
    expect(journalDayLabel('affirmation-43')).toBe('Day 43');
    expect(journalDayLabel('affirmation-44')).toBe('Day 44');
    expect(journalDayLabel('affirmation-45')).toBe('Day 45');
    expect(journalDayLabel('affirmation-46')).toBe('Day 46');
    expect(journalDayLabel('affirmation-47')).toBe('Day 47');
    expect(journalDayLabel('affirmation-48')).toBe('Day 48');
    expect(journalDayLabel('affirmation-49')).toBe('Day 49');
    expect(journalDayLabel('affirmation-50')).toBe('Day 50');
    expect(journalDayLabel('affirmation-51')).toBe('Day 51');
    expect(journalDayLabel('affirmation-52')).toBe('Day 52');
    expect(journalDayLabel('affirmation-53')).toBe('Day 53');
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
    expect(journalSubtitle('affirmation-36')).toBe('世界豐富得展開，我正處於一個新的階段');
    expect(journalSubtitle('affirmation-37')).toBe('我選擇相信，我的身體是有力量的');
    expect(journalSubtitle('affirmation-38')).toBe('我感謝眼前這份美好');
    expect(journalSubtitle('affirmation-39')).toBe('給自己的慈愛：願我平安、健康、幸福');
    expect(journalSubtitle('affirmation-40')).toBe('給她人與所愛的人：願你幸福，願你自由');
    expect(journalSubtitle('affirmation-41')).toBe('給身邊的人：願每個人都被善待');
    expect(journalSubtitle('affirmation-42')).toBe('給陌生人與所有生命：願一切眾生安樂');
    expect(journalSubtitle('affirmation-43')).toBe('慈愛與界線：願我在關係中保持溫柔與智慧');
    expect(journalSubtitle('affirmation-44')).toBe('慈愛的生活：願我的存在為世界帶來美好');
    expect(journalSubtitle('affirmation-45')).toBe('每日慈心給予自己');
    expect(journalSubtitle('affirmation-46')).toBe('感謝大地，提供製作床墊的材料');
    expect(journalSubtitle('affirmation-47')).toBe('感謝原料生產者，將自然資源帶進人類生活');
    expect(journalSubtitle('affirmation-48')).toBe('感謝工程師、工廠與所有製造床墊的人');
    expect(journalSubtitle('affirmation-49')).toBe('感謝物流、門市與所有讓床墊來到我面前的人');
    expect(journalSubtitle('affirmation-50')).toBe('「山式」Mountain Pose');
    expect(journalSubtitle('affirmation-51')).toBe('感謝妳幫助我感覺自己很好');
    expect(journalSubtitle('affirmation-52')).toBe('我值得被溫柔地支持，感受到尊嚴、自信與完整');
    expect(journalSubtitle('affirmation-53')).toBe('感謝我們可以一起想像未來');
  });
});

describe('journalAdjacent', () => {
  it('walks Day order for previous and next links', () => {
    expect(journalAdjacent('affirmation-1').prev).toBeUndefined();
    expect(journalAdjacent('affirmation-1').next?.id).toBe('affirmation-2');
    expect(journalAdjacent('affirmation-35').prev?.id).toBe('affirmation-34');
    expect(journalAdjacent('affirmation-49').prev?.id).toBe('affirmation-48');
    expect(journalAdjacent('affirmation-49').next?.id).toBe('affirmation-50');
    expect(journalAdjacent('affirmation-50').prev?.id).toBe('affirmation-49');
    expect(journalAdjacent('affirmation-50').next?.id).toBe('affirmation-51');
    expect(journalAdjacent('affirmation-51').prev?.id).toBe('affirmation-50');
    expect(journalAdjacent('affirmation-51').next?.id).toBe('affirmation-52');
    expect(journalAdjacent('affirmation-52').prev?.id).toBe('affirmation-51');
    expect(journalAdjacent('affirmation-52').next?.id).toBe('affirmation-53');
    expect(journalAdjacent('affirmation-53').prev?.id).toBe('affirmation-52');
    expect(journalAdjacent('affirmation-53').next).toBeUndefined();
    expect(journalAdjacent('affirmation-20').prev?.id).toBe('affirmation-19');
    expect(journalAdjacent('affirmation-20').next?.id).toBe('affirmation-21');
  });
});
