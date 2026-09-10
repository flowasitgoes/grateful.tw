import { describe, expect, it } from 'vitest';
import {
  JOURNALS,
  formatJournalDateTime,
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
  it('includes the first affirmation with createdAt', () => {
    expect(JOURNALS[0]?.id).toBe('affirmation-1');
    expect(JOURNALS[0]?.title).toBe('冠均的 Affirmation');
    expect(JOURNALS[0]?.createdAt).toBe('2026-09-10T17:08:00+08:00');
  });
});
