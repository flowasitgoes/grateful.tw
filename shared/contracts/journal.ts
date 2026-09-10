export interface Journal {
  id: string;
  title: string;
  createdAt: string;
}

export const JOURNAL_TITLE = '感恩日記';

export const JOURNAL_COUNT = 13;

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
};

export const JOURNALS: readonly Journal[] = Array.from({ length: JOURNAL_COUNT }, (_, index) => {
  const n = index + 1;
  const day = String(n).padStart(2, '0');
  return {
    id: `affirmation-${n}`,
    title: JOURNAL_TITLE,
    createdAt: `2026-09-${day}T17:08:00+08:00`,
  };
});

export function journalsNewestFirst(items: readonly Journal[] = JOURNALS): Journal[] {
  return [...items].sort((a, b) => (a.createdAt < b.createdAt ? 1 : a.createdAt > b.createdAt ? -1 : 0));
}

export function findJournal(id: string): Journal | undefined {
  return JOURNALS.find((item) => item.id === id);
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
