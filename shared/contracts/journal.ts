export interface Journal {
  id: string;
  title: string;
  createdAt: string;
}

export const JOURNAL_TITLE = '感恩日記';

export const JOURNAL_COUNT = 35;

export const JOURNAL_HEADINGS: Readonly<Record<string, string>> = {
  'affirmation-1': '愛、信任與安全感',
  'affirmation-2': '自愛與自我接納',
  'affirmation-3': '內在小孩與療癒',
  'affirmation-4': '愛與親密關係',
  'affirmation-5': '自信、能力與力量',
  'affirmation-6': '專注、平靜與生活節奏',
  'affirmation-7': '創造力、工作與志向',
  'affirmation-8': '金錢、豐盛與接受',
  'affirmation-9': '感恩與接受',
  'affirmation-10': '對伙伴與他人的祝福',
  'affirmation-11': '給孩子們的祝福',
  'affirmation-12': '每日精簡版',
  'affirmation-13': '系統化 Affirmation 結構',
  'affirmation-14': '我願意理解並且接受你',
  'affirmation-15': '愛情裡的安全感',
  'affirmation-16': '自信與自我價值',
  'affirmation-17': '我的價值不需要透過比較來證明',
  'affirmation-18': '我在親密關係中是安全的',
  'affirmation-19': '我選擇輕鬆、自在地生活',
  'affirmation-20': '我值得被愛、被關心、被重視',
  'affirmation-21': '表達真實的自己是安全的',
  'affirmation-22': '不同意見與誤會，不代表關係會結束',
  'affirmation-23': '我可以輕鬆、自在地做自己',
  'affirmation-24': '我在別人心中是重要的',
  'affirmation-25': '我值得擁有親密的連結，也允許自己被愛',
  'affirmation-26': '我值得被慷慨、體貼地對待',
  'affirmation-27': '我的感受、意願與選擇值得被尊重',
  'affirmation-28': '我值得被欣賞、被喜歡',
  'affirmation-29': '我值得被主動親近、被溫柔地愛',
  'affirmation-30': '愛與關係滋養我的創造力',
  'affirmation-31': '我值得被支持，我的創造力值得被看見',
  'affirmation-32': '我值得與愛的人共同創造美好的生活',
  'affirmation-33': '我選擇用有意識的愛與誠懇對待世界',
  'affirmation-34': '我值得擁有讓自己安心、被尊重的關係',
  'affirmation-35': '我感謝健康的身體，讓我體驗生命的豐盛',
};

function journalCreatedAt(n: number): string {
  if (n === 14) {
    return '2026-10-10T22:18:00+08:00';
  }
  if (n === 15) {
    return '2026-10-12T00:32:00+08:00';
  }
  if (n === 16) {
    return '2026-10-12T00:34:00+08:00';
  }
  if (n === 17) {
    return '2026-10-12T00:37:00+08:00';
  }
  if (n === 18) {
    return '2026-10-12T00:39:00+08:00';
  }
  if (n === 19) {
    return '2026-10-12T00:40:00+08:00';
  }
  if (n === 20) {
    return '2026-10-12T00:41:00+08:00';
  }
  if (n === 21) {
    return '2026-10-12T00:42:00+08:00';
  }
  if (n === 22) {
    return '2026-10-12T00:43:00+08:00';
  }
  if (n === 23) {
    return '2026-10-12T00:45:00+08:00';
  }
  if (n === 24) {
    return '2026-10-12T00:47:00+08:00';
  }
  if (n === 25) {
    return '2026-10-12T00:49:00+08:00';
  }
  if (n === 26) {
    return '2026-10-12T00:51:00+08:00';
  }
  if (n === 27) {
    return '2026-10-12T00:52:00+08:00';
  }
  if (n === 28) {
    return '2026-10-12T00:53:00+08:00';
  }
  if (n === 29) {
    return '2026-10-12T00:54:00+08:00';
  }
  if (n === 30) {
    return '2026-10-12T00:55:00+08:00';
  }
  if (n === 31) {
    return '2026-10-12T00:56:00+08:00';
  }
  if (n === 32) {
    return '2026-10-12T00:58:00+08:00';
  }
  if (n === 33) {
    return '2026-10-12T00:59:00+08:00';
  }
  if (n === 34) {
    return '2026-10-12T01:00:00+08:00';
  }
  if (n === 35) {
    return '2026-10-12T01:01:00+08:00';
  }
  return `2026-09-${String(n).padStart(2, '0')}T17:08:00+08:00`;
}

export const JOURNALS: readonly Journal[] = Array.from({ length: JOURNAL_COUNT }, (_, index) => {
  const n = index + 1;
  return {
    id: `affirmation-${n}`,
    title: JOURNAL_TITLE,
    createdAt: journalCreatedAt(n),
  };
});

export function journalsNewestFirst(items: readonly Journal[] = JOURNALS): Journal[] {
  return [...items].sort((a, b) => (a.createdAt < b.createdAt ? 1 : a.createdAt > b.createdAt ? -1 : 0));
}

export function findJournal(id: string): Journal | undefined {
  return JOURNALS.find((item) => item.id === id);
}

export function journalDayNumber(id: string): number {
  const n = Number(id.replace(/^affirmation-/, ''));
  return Number.isFinite(n) ? n : NaN;
}

/** Adjacent by Day number（Day 1…N），供閱讀頁上一篇／下一篇。 */
export function journalAdjacent(id: string): {
  prev: Journal | undefined;
  next: Journal | undefined;
} {
  const n = journalDayNumber(id);
  if (!Number.isFinite(n)) {
    return { prev: undefined, next: undefined };
  }
  return {
    prev: n > 1 ? findJournal(`affirmation-${n - 1}`) : undefined,
    next: n < JOURNAL_COUNT ? findJournal(`affirmation-${n + 1}`) : undefined,
  };
}

export function journalDayLabel(id: string): string {
  return `Day ${id.replace(/^affirmation-/, '')}`;
}

export function journalSubtitle(id: string): string {
  return JOURNAL_HEADINGS[id] ?? '';
}

export function formatJournalDateTime(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) {
    return iso;
  }
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Taipei',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date);
  const value = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? '';
  return `${value('year')}-${value('month')}-${value('day')} ${value('hour')}:${value('minute')}`;
}
