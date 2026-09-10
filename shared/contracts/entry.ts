export const ENTRY_SECTION_KEYS = [
  'addressing',
  'safety',
  'acceptance',
  'capability',
  'relationship',
  'creation',
  'abundance',
  'gratitude',
  'intention',
] as const;

export type EntrySectionKey = (typeof ENTRY_SECTION_KEYS)[number];

export const ENTRY_SECTION_LABELS: Record<EntrySectionKey, string> = {
  addressing: '稱呼自己',
  safety: '安全感',
  acceptance: '自我接納',
  capability: '能力',
  relationship: '關係',
  creation: '創造',
  abundance: '金錢',
  gratitude: '感恩',
  intention: '今日意圖',
};

export type EntrySections = Record<EntrySectionKey, string>;

export const ENTRY_FIELD_KEYS = [...ENTRY_SECTION_KEYS, 'updatedAt'] as const;

export const ENTRY_DATE_ID_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

export function emptyEntrySections(): EntrySections {
  return {
    addressing: '',
    safety: '',
    acceptance: '',
    capability: '',
    relationship: '',
    creation: '',
    abundance: '',
    gratitude: '',
    intention: '',
  };
}

export function todayEntryId(now: Date = new Date()): string {
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function isEntryDateId(id: string): boolean {
  return ENTRY_DATE_ID_PATTERN.test(id);
}
