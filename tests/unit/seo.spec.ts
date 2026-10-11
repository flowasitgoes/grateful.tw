import { describe, expect, it } from 'vitest';
import {
  JOURNAL_COUNT,
  applyJournalShareMetaHtml,
  articleJsonLd,
  findJournal,
  homeSeoTitle,
  journalOgImageAlt,
  journalSeoDescription,
  journalSeoTitle,
  sitemapPaths,
  siteUrl,
} from '../../shared/contracts';

describe('site SEO', () => {
  it('names the home document 感恩日記｜grateful.tw', () => {
    expect(homeSeoTitle()).toBe('感恩日記｜grateful.tw');
    expect(siteUrl('/')).toBe('https://grateful.tw/');
    expect(siteUrl('/og-image.png')).toBe('https://grateful.tw/og-image.png');
  });

  it('gives each journal a keyword-rich title, description, and og image alt', () => {
    expect(journalSeoTitle('affirmation-1')).toBe(
      '愛、信任與安全感｜感恩日記 Day 1｜grateful.tw',
    );
    expect(journalSeoTitle('affirmation-13')).toBe(
      '系統化 Affirmation 結構｜感恩日記 Day 13｜grateful.tw',
    );
    expect(journalSeoTitle('affirmation-35')).toBe(
      '我感謝健康的身體，讓我體驗生命的豐盛｜感恩日記 Day 35｜grateful.tw',
    );

    expect(journalSeoDescription('affirmation-1')).toBe(
      '感恩日記｜愛、信任與安全感。我愛你，冠均。我真的愛你。我信任你。生命會提供我所需要的一切。',
    );
    expect(journalSeoDescription('affirmation-13')).toContain('感恩日記｜系統化 Affirmation 結構。');
    expect(journalSeoDescription('affirmation-13')).toContain('九段 Affirmation');
    expect(journalSeoDescription('affirmation-35')).toContain(
      '感恩日記｜我感謝健康的身體，讓我體驗生命的豐盛。',
    );
    expect(journalSeoDescription('affirmation-35')).toContain('我愛我的身體');

    expect(journalOgImageAlt('affirmation-1')).toBe('愛、信任與安全感｜感恩日記');
    expect(journalOgImageAlt('affirmation-35')).toBe(
      '我感謝健康的身體，讓我體驗生命的豐盛｜感恩日記',
    );
  });

  it('lists home and thirty-five article paths for the sitemap', () => {
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
    expect(json.description).toBe(journalSeoDescription('affirmation-1'));
    expect(json.url).toBe('https://grateful.tw/journals/affirmation-1');
    expect(json.image).toBe('https://grateful.tw/og-image.png');
  });

  it('stamps SPA shell HTML with per-journal Open Graph for crawlers', () => {
    const shell = `<!doctype html>
<html lang="zh-Hant">
  <head>
    <title>感恩日記｜grateful.tw</title>
    <meta name="description" content="冠均的感恩日記。三十五篇肯定與感恩練習，極簡只讀。" />
    <link rel="canonical" href="https://grateful.tw/" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="感恩日記｜grateful.tw" />
    <meta property="og:description" content="冠均的感恩日記。三十五篇肯定與感恩練習，極簡只讀。" />
    <meta property="og:url" content="https://grateful.tw/" />
    <meta property="og:image" content="https://grateful.tw/og-image.png" />
    <meta property="og:image:alt" content="grateful.tw" />
    <meta name="twitter:title" content="感恩日記｜grateful.tw" />
    <meta name="twitter:description" content="冠均的感恩日記。三十五篇肯定與感恩練習，極簡只讀。" />
  </head>
  <body><app-root></app-root></body>
</html>`;

    const html = applyJournalShareMetaHtml(shell, 'affirmation-35');
    expect(html).toContain(
      '<title>我感謝健康的身體，讓我體驗生命的豐盛｜感恩日記 Day 35｜grateful.tw</title>',
    );
    expect(html).toContain(
      'content="感恩日記｜我感謝健康的身體，讓我體驗生命的豐盛。我愛我的身體。',
    );
    expect(html).toContain('property="og:type" content="article"');
    expect(html).toContain('property="og:url" content="https://grateful.tw/journals/affirmation-35"');
    expect(html).toContain('property="og:image" content="https://grateful.tw/og-image.png"');
    expect(html).toContain(
      'property="og:image:alt" content="我感謝健康的身體，讓我體驗生命的豐盛｜感恩日記"',
    );
    expect(html).toContain('rel="canonical" href="https://grateful.tw/journals/affirmation-35"');
    expect(html).toContain('id="grateful-jsonld"');
    expect(html).toContain('"@type":"Article"');
    expect(html).toContain('https://grateful.tw/journals/affirmation-35');
  });
});
