import {
  ENTRY_SECTION_KEYS,
  emptyEntrySections,
  todayEntryId,
  type EntrySections,
} from '@app/contracts';

export const LOCAL_ENTRY_KEY_PREFIX = 'grateful.tw:entries:';

export function localEntryKey(entryId: string = todayEntryId()): string {
  return `${LOCAL_ENTRY_KEY_PREFIX}${entryId}`;
}

export function parseStoredEntry(raw: string | null): EntrySections {
  if (!raw) {
    return emptyEntrySections();
  }
  try {
    const data: unknown = JSON.parse(raw);
    if (typeof data !== 'object' || data === null) {
      return emptyEntrySections();
    }
    const record = data as Record<string, unknown>;
    const sections = emptyEntrySections();
    for (const key of ENTRY_SECTION_KEYS) {
      const value = record[key];
      sections[key] = typeof value === 'string' ? value : '';
    }
    return sections;
  } catch {
    return emptyEntrySections();
  }
}

export function serializeStoredEntry(
  sections: EntrySections,
  updatedAt: string = new Date().toISOString(),
): string {
  return JSON.stringify({
    addressing: sections.addressing,
    safety: sections.safety,
    acceptance: sections.acceptance,
    capability: sections.capability,
    relationship: sections.relationship,
    creation: sections.creation,
    abundance: sections.abundance,
    gratitude: sections.gratitude,
    intention: sections.intention,
    updatedAt,
  });
}
