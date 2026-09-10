export interface Journal {
  id: string;
  title: string;
  createdAt: string;
}

export const JOURNALS: readonly Journal[] = [
  {
    id: 'affirmation-1',
    title: '冠均的 Affirmation',
    createdAt: '2026-09-10T17:08:00+08:00',
  },
];

export function journalsNewestFirst(items: readonly Journal[] = JOURNALS): Journal[] {
  return [...items].sort((a, b) => (a.createdAt < b.createdAt ? 1 : a.createdAt > b.createdAt ? -1 : 0));
}

export function findJournal(id: string): Journal | undefined {
  return JOURNALS.find((item) => item.id === id);
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
