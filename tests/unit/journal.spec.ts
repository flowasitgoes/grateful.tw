import { describe, expect, it } from 'vitest';
import {
  JOURNAL_COUNT,
  JOURNALS,
  formatJournalDateTime,
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
  it('has thirteen entries, newest first is Day 13 / affirmation-13', () => {
    expect(JOURNALS).toHaveLength(JOURNAL_COUNT);
    expect(JOURNALS[0]?.id).toBe('affirmation-1');
    expect(JOURNALS[0]?.createdAt).toBe('2026-09-01T17:08:00+08:00');
    expect(JOURNALS[12]?.id).toBe('affirmation-13');
    expect(JOURNALS[12]?.createdAt).toBe('2026-09-13T17:08:00+08:00');
    expect(journalsNewestFirst()[0]?.id).toBe('affirmation-13');
  });
});

describe('journalDayLabel', () => {
  it('maps affirmation-n to Day n', () => {
    expect(journalDayLabel('affirmation-1')).toBe('Day 1');
    expect(journalDayLabel('affirmation-12')).toBe('Day 12');
    expect(journalDayLabel('affirmation-13')).toBe('Day 13');
  });
});

describe('journalSubtitle', () => {
  it('uses chapter name without numeral prefix', () => {
    expect(journalSubtitle('affirmation-1')).toBe('愛、信任與安全感');
    expect(journalSubtitle('affirmation-11')).toBe('給孩子們的祝福');
    expect(journalSubtitle('affirmation-12')).toBe('每日精簡版');
    expect(journalSubtitle('affirmation-13')).toBe('系統化 Affirmation 結構');
  });
});
