import { describe, expect, it } from 'vitest';
import {
  CORE_SEARCH_KEYWORDS,
  JOURNAL_COUNT,
  SITE_DESCRIPTION,
  applyJournalShareMetaHtml,
  articleJsonLd,
  findJournal,
  homeJsonLd,
  homeSeoTitle,
  journalKeywords,
  journalOgImageAlt,
  journalOgImagePath,
  journalSeoDescription,
  journalSeoTitle,
  renderLlmsFullTxt,
  renderLlmsTxt,
  sitemapPaths,
  siteUrl,
  websiteJsonLd,
} from '../../shared/contracts';

describe('site SEO', () => {
  it('names the home document 感恩日記｜grateful.tw', () => {
    expect(homeSeoTitle()).toBe('感恩日記｜grateful.tw');
    expect(SITE_DESCRIPTION).toContain('grateful.tw');
    expect(SITE_DESCRIPTION).toContain('肯定語');
    expect(SITE_DESCRIPTION).toContain('Affirmation');
    expect(siteUrl('/')).toBe('https://grateful.tw/');
    expect(siteUrl('/og-image.png')).toBe('https://grateful.tw/og-image.png');
  });

  it('tracks a short list of core Search Console keywords', () => {
    expect(CORE_SEARCH_KEYWORDS).toHaveLength(8);
    expect(CORE_SEARCH_KEYWORDS).toContain('感恩日記');
    expect(CORE_SEARCH_KEYWORDS).toContain('肯定語');
    expect(CORE_SEARCH_KEYWORDS).toContain('安全感');
  });

  it('gives each journal a keyword-rich title, description, and og image alt', () => {
    expect(journalSeoTitle('affirmation-1')).toBe(
      '愛、信任與安全感｜感恩日記 Day 1｜grateful.tw',
    );
    expect(journalSeoTitle('affirmation-35')).toBe(
      '我感謝健康的身體，讓我體驗生命的豐盛｜感恩日記 Day 35｜grateful.tw',
    );

    expect(journalKeywords('affirmation-1')).toEqual(['安全感', '肯定語']);
    expect(journalKeywords('affirmation-31')).toEqual(['創造力', '被看見']);
    expect(journalSeoDescription('affirmation-1')).toContain('感恩日記｜愛、信任與安全感。');
    expect(journalSeoDescription('affirmation-1')).toContain('我愛你，冠均。');
    expect(journalSeoDescription('affirmation-1')).toContain(
      '適合每日感恩日記與肯定語練習，主題：安全感、肯定語。',
    );
    expect(journalSeoDescription('affirmation-35')).toContain('主題：健康、感恩。');

    expect(journalOgImageAlt('affirmation-1')).toBe('愛、信任與安全感｜感恩日記');
    expect(journalOgImagePath('affirmation-35')).toBe('/og/affirmation-35.jpg');
  });

  it('lists home and thirty-five article paths for the sitemap', () => {
    expect(sitemapPaths()).toHaveLength(JOURNAL_COUNT + 1);
    expect(sitemapPaths()[0]).toBe('/');
    expect(sitemapPaths()[1]).toBe('/journals/affirmation-1');
  });

  it('builds Article JSON-LD with author, keywords, about, and per-journal image', () => {
    const journal = findJournal('affirmation-1');
    expect(journal).toBeDefined();
    const json = articleJsonLd(journal!);
    expect(json['@type']).toBe('Article');
    expect(json.headline).toBe('愛、信任與安全感');
    expect(json.description).toBe(journalSeoDescription('affirmation-1'));
    expect(json.url).toBe('https://grateful.tw/journals/affirmation-1');
    expect(json.image).toBe('https://grateful.tw/og/affirmation-1.jpg');
    expect(json.author).toEqual({ '@type': 'Person', name: '冠均' });
    expect(json.keywords).toBe('安全感, 肯定語');
    expect(json.about).toEqual([
      { '@type': 'Thing', name: '安全感' },
      { '@type': 'Thing', name: '肯定語' },
    ]);
    expect(json.isAccessibleForFree).toBe(true);
    expect(json.isPartOf).toEqual({
      '@type': 'WebSite',
      name: 'grateful.tw',
      alternateName: '感恩日記',
      url: 'https://grateful.tw/',
    });
  });

  it('builds home JSON-LD with WebSite and ItemList graph', () => {
    const json = homeJsonLd();
    expect(json['@context']).toBe('https://schema.org');
    const graph = json['@graph'] as Array<Record<string, unknown>>;
    expect(graph).toHaveLength(2);
    expect(graph[0]?.['@type']).toBe('WebSite');
    expect(graph[0]?.alternateName).toBe('感恩日記');
    expect(graph[0]?.sameAs).toEqual(['https://www.instagram.com/riddles.tw']);
    expect(graph[0]?.isAccessibleForFree).toBe(true);
    expect(graph[1]?.['@type']).toBe('ItemList');
    expect(graph[1]?.numberOfItems).toBe(JOURNAL_COUNT);
    const items = graph[1]?.itemListElement as Array<Record<string, unknown>>;
    expect(items).toHaveLength(JOURNAL_COUNT);
    expect(items[0]?.name).toBe('愛、信任與安全感');
    expect(items[34]?.url).toBe('https://grateful.tw/journals/affirmation-35');
    expect(websiteJsonLd().keywords).toContain('肯定語');
  });

  it('renders llms.txt and llms-full.txt for AI assistants', () => {
    const shortMap = renderLlmsTxt();
    expect(shortMap).toContain('# grateful.tw');
    expect(shortMap).toContain('Affirmation');
    expect(shortMap).toContain('https://grateful.tw/llms-full.txt');
    expect(shortMap).toContain('https://grateful.tw/journals/affirmation-1');
    expect(shortMap).toContain('Day 35');

    const full = renderLlmsFullTxt();
    expect(full).toContain('引用本站內容時');
    expect(full).toContain('我愛你，冠均。');
    expect(full).toContain('https://grateful.tw/journals/affirmation-35');
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
    <meta name="twitter:image" content="https://grateful.tw/og-image.png" />
  </head>
  <body><app-root></app-root></body>
</html>`;

    const html = applyJournalShareMetaHtml(shell, 'affirmation-35');
    expect(html).toContain(
      '<title>我感謝健康的身體，讓我體驗生命的豐盛｜感恩日記 Day 35｜grateful.tw</title>',
    );
    expect(html).toContain('主題：健康、感恩。');
    expect(html).toContain('property="og:type" content="article"');
    expect(html).toContain('property="og:url" content="https://grateful.tw/journals/affirmation-35"');
    expect(html).toContain(
      'property="og:image" content="https://grateful.tw/og/affirmation-35.jpg"',
    );
    expect(html).toContain(
      'name="twitter:image" content="https://grateful.tw/og/affirmation-35.jpg"',
    );
    expect(html).toContain('id="grateful-jsonld"');
    expect(html).toContain('"@type":"Article"');
    expect(html).toContain('"name":"冠均"');
  });
});
