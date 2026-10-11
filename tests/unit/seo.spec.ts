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
    expect(siteUrl('/og-image.png')).toBe('https://grateful.tw/og-image.png');
  });

  it('gives each journal a unique title and description', () => {
    expect(journalSeoTitle('affirmation-1')).toBe(
      '愛、信任與安全感｜Day 1｜grateful.tw',
    );
    expect(journalSeoTitle('affirmation-13')).toBe(
      '系統化 Affirmation 結構｜Day 13｜grateful.tw',
    );
    expect(journalSeoTitle('affirmation-14')).toBe(
      '我願意理解並且接受你｜Day 14｜grateful.tw',
    );
    expect(journalSeoTitle('affirmation-15')).toBe(
      '愛情裡的安全感｜Day 15｜grateful.tw',
    );
    expect(journalSeoTitle('affirmation-16')).toBe(
      '自信與自我價值｜Day 16｜grateful.tw',
    );
    expect(journalSeoTitle('affirmation-17')).toBe(
      '我的價值不需要透過比較來證明｜Day 17｜grateful.tw',
    );
    expect(journalSeoTitle('affirmation-18')).toBe(
      '我在親密關係中是安全的｜Day 18｜grateful.tw',
    );
    expect(journalSeoTitle('affirmation-19')).toBe(
      '我選擇輕鬆、自在地生活｜Day 19｜grateful.tw',
    );
    expect(journalSeoTitle('affirmation-20')).toBe(
      '我值得被愛、被關心、被重視｜Day 20｜grateful.tw',
    );
    expect(journalSeoTitle('affirmation-21')).toBe(
      '表達真實的自己是安全的｜Day 21｜grateful.tw',
    );
    expect(journalSeoTitle('affirmation-22')).toBe(
      '不同意見與誤會，不代表關係會結束｜Day 22｜grateful.tw',
    );
    expect(journalSeoTitle('affirmation-23')).toBe(
      '我可以輕鬆、自在地做自己｜Day 23｜grateful.tw',
    );
    expect(journalSeoTitle('affirmation-24')).toBe(
      '我在別人心中是重要的｜Day 24｜grateful.tw',
    );
    expect(journalSeoTitle('affirmation-25')).toBe(
      '我值得擁有親密的連結，也允許自己被愛｜Day 25｜grateful.tw',
    );
    expect(journalSeoTitle('affirmation-26')).toBe(
      '我值得被慷慨、體貼地對待｜Day 26｜grateful.tw',
    );
    expect(journalSeoTitle('affirmation-27')).toBe(
      '我的感受、意願與選擇值得被尊重｜Day 27｜grateful.tw',
    );
    expect(journalSeoTitle('affirmation-28')).toBe(
      '我值得被欣賞、被喜歡｜Day 28｜grateful.tw',
    );
    expect(journalSeoTitle('affirmation-29')).toBe(
      '我值得被主動親近、被溫柔地愛｜Day 29｜grateful.tw',
    );
    expect(journalSeoTitle('affirmation-30')).toBe(
      '愛與關係滋養我的創造力｜Day 30｜grateful.tw',
    );
    expect(journalSeoTitle('affirmation-31')).toBe(
      '我值得被支持，我的創造力值得被看見｜Day 31｜grateful.tw',
    );
    expect(journalSeoTitle('affirmation-32')).toBe(
      '我值得與愛的人共同創造美好的生活｜Day 32｜grateful.tw',
    );
    expect(journalSeoTitle('affirmation-33')).toBe(
      '我選擇用有意識的愛與誠懇對待世界｜Day 33｜grateful.tw',
    );
    expect(journalSeoTitle('affirmation-34')).toBe(
      '我值得擁有讓自己安心、被尊重的關係｜Day 34｜grateful.tw',
    );
    expect(journalSeoTitle('affirmation-35')).toBe(
      '我感謝健康的身體，讓我體驗生命的豐盛｜Day 35｜grateful.tw',
    );
    expect(journalSeoDescription('affirmation-1')).toContain('我愛你，冠均。');
    expect(journalSeoDescription('affirmation-13')).toContain('九段 Affirmation');
    expect(journalSeoDescription('affirmation-34')).toContain('被關心、被在乎');
    expect(journalSeoDescription('affirmation-35')).toContain('我愛我的身體');
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
    expect(json.url).toBe('https://grateful.tw/journals/affirmation-1');
    expect(json.image).toBe('https://grateful.tw/og-image.png');
  });
});
