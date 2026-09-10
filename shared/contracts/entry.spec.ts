import { describe, expect, it } from 'vitest';
import {
  ENTRY_FIELD_KEYS,
  ENTRY_SECTION_KEYS,
  ENTRY_SECTION_LABELS,
  emptyEntrySections,
  isEntryDateId,
  todayEntryId,
} from './entry';

describe('ENTRY_SECTION_KEYS', () => {
  it('is exactly nine keys in PRD order', () => {
    expect([...ENTRY_SECTION_KEYS]).toEqual([
      'addressing',
      'safety',
      'acceptance',
      'capability',
      'relationship',
      'creation',
      'abundance',
      'gratitude',
      'intention',
    ]);
  });

  it('lists Firestore fields without extras', () => {
    expect([...ENTRY_FIELD_KEYS]).toEqual([...ENTRY_SECTION_KEYS, 'updatedAt']);
  });

  it('maps labels from 06-ui-ux', () => {
    expect(ENTRY_SECTION_LABELS.addressing).toBe('稱呼自己');
    expect(ENTRY_SECTION_LABELS.intention).toBe('今日意圖');
    expect(Object.keys(ENTRY_SECTION_LABELS)).toHaveLength(9);
  });
});

describe('emptyEntrySections', () => {
  it('returns empty strings for all nine keys', () => {
    const empty = emptyEntrySections();
    for (const key of ENTRY_SECTION_KEYS) {
      expect(empty[key]).toBe('');
    }
  });
});

describe('todayEntryId', () => {
  it('uses the device-local calendar date', () => {
    expect(todayEntryId(new Date(2026, 8, 10, 22, 15))).toBe('2026-09-10');
  });

  it('accepts YYYY-MM-DD ids', () => {
    expect(isEntryDateId('2026-09-10')).toBe(true);
    expect(isEntryDateId('2026/09/10')).toBe(false);
  });
});

