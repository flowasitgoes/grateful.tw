import { describe, expect, it } from 'vitest';
import {
  JOURNAL_COUNT,
  articleJsonLd,
  findJournal,
  homeSeoTitle,
  journalSeoDescription,
  journalSeoTitle,
  sitemapPaths,
  siteUrl,
} from '../../shared/contracts';

describe('site SEO', () => {
  it('names the home document 感恩日記｜grateful.tw', () => {
    expect(homeSeoTitle()).toBe('感恩日記｜grateful.tw');
    expect(siteUrl('/')).toBe('https://grateful.tw/');
  });

  it('gives each journal a unique title and description', () => {
    expect(journalSeoTitle('affirmation-1')).toBe(
      '愛、信任與安全感｜Day 1｜grateful.tw',
    );
    expect(journalSeoTitle('affirmation-13')).toBe(
      '系統化 Affirmation 結構｜Day 13｜grateful.tw',
    );
    expect(journalSeoDescription('affirmation-1')).toContain('我愛你，冠均。');
    expect(journalSeoDescription('affirmation-13')).toContain('九段 Affirmation');
  });

  it('lists home and thirteen article paths for the sitemap', () => {
    expect(sitemapPaths()).toHaveLength(JOURNAL_COUNT + 1);
    expect(sitemapPaths()[0]).toBe('/');
    expect(sitemapPaths()[1]).toBe('/journals/affirmation-1');
  });

  it('builds Article JSON-LD from the journal', () => {
    const journal = findJournal('affirmation-1');
    expect(journal).toBeDefined();
    const json = articleJsonLd(journal!);
    expect(json['@type']).toBe('Article');
    expect(json.headline).toBe('愛、信任與安全感');
    expect(json.url).toBe('https://grateful.tw/journals/affirmation-1');
  });
});
