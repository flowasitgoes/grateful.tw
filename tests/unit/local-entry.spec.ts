import { describe, expect, it } from 'vitest';
import { emptyEntrySections } from '../../shared/contracts/entry';
import { localEntryKey, parseStoredEntry } from '../../shared/frontend/data-access/local-entry';

describe('localEntryKey', () => {
  it('uses the spec prefix and date id', () => {
    expect(localEntryKey('2026-09-10')).toBe('grateful.tw:entries:2026-09-10');
  });
});

describe('parseStoredEntry', () => {
  it('returns empty sections when missing or invalid', () => {
    expect(parseStoredEntry(null)).toEqual(emptyEntrySections());
    expect(parseStoredEntry('not-json')).toEqual(emptyEntrySections());
    expect(parseStoredEntry('[]')).toEqual(emptyEntrySections());
  });

  it('reads only the nine string fields', () => {
    const parsed = parseStoredEntry(
      JSON.stringify({
        addressing: '冠均，我看見你。',
        extra: 'nope',
        updatedAt: '2026-09-10T00:00:00.000Z',
      }),
    );
    expect(parsed.addressing).toBe('冠均，我看見你。');
    expect(parsed.intention).toBe('');
    expect(parsed).not.toHaveProperty('extra');
  });
});
