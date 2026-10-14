import { describe, expect, it } from 'vitest';
import {
  DEFAULT_LOCALE,
  JOURNAL_COUNT,
  JOURNAL_HEADINGS_EN,
  htmlLang,
  journalListTitle,
  journalSeoDescription,
  journalSeoTitle,
  journalSubtitle,
} from '../../shared/contracts';
import { JOURNAL_BODIES_EN } from '../../shared/frontend/ui/journal-bodies.en';

describe('i18n', () => {
  it('defaults to Traditional Chinese', () => {
    expect(DEFAULT_LOCALE).toBe('zh');
    expect(htmlLang('zh')).toBe('zh-Hant');
    expect(htmlLang('en')).toBe('en');
    expect(journalListTitle()).toBe('感恩日記');
    expect(journalListTitle('en')).toBe('Gratitude Journal');
  });

  it('has English headings and bodies for every journal', () => {
    expect(Object.keys(JOURNAL_HEADINGS_EN)).toHaveLength(JOURNAL_COUNT);
    expect(Object.keys(JOURNAL_BODIES_EN)).toHaveLength(JOURNAL_COUNT);
    expect(journalSubtitle('affirmation-1', 'en')).toBe('Love, Trust, and Safety');
    expect(journalSubtitle('affirmation-31', 'en')).toContain('Creativity');
    expect(JOURNAL_BODIES_EN['affirmation-1']).toContain('<section>');
    expect(JOURNAL_BODIES_EN['affirmation-1']).toContain('I love you, Guanjun.');
    expect(JOURNAL_BODIES_EN['affirmation-13']).toContain('Connect with yourself');
    expect(JOURNAL_BODIES_EN['affirmation-54']).toContain('</section>');
    expect(JOURNAL_BODIES_EN['affirmation-54']).toContain(
      'Thank you for being willing to explain, instead of letting the misunderstanding continue.',
    );
  });

  it('builds English SEO title and description', () => {
    expect(journalSeoTitle('affirmation-1', 'en')).toBe(
      'Love, Trust, and Safety｜Gratitude Journal Day 1｜grateful.tw',
    );
    expect(journalSeoDescription('affirmation-1', 'en')).toContain('Gratitude Journal｜');
    expect(journalSeoDescription('affirmation-1', 'en')).toContain('Themes: safety, affirmation.');
  });
});
