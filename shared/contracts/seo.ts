import {
  JOURNALS,
  journalDayLabel,
  journalSubtitle,
  type Journal,
} from './journal';

export const SITE_NAME = 'grateful.tw';
export const SITE_ORIGIN = 'https://grateful.tw';
export const SITE_DESCRIPTION =
  '冠均的感恩日記。十三篇肯定與感恩練習，極簡只讀。';

export const JOURNAL_DESCRIPTIONS: Readonly<Record<string, string>> = {
  'affirmation-1': '我愛你，冠均。我真的愛你。我信任你。生命會提供我所需要的一切。',
  'affirmation-2': '冠均，我愛你。我認可你。我接受現在的你。我選擇無條件地愛自己。',
  'affirmation-3': '我愛我的內在小孩。我願意去愛、理解並接納所有的內在小孩。',
  'affirmation-4': '我值得擁有愛、親密、喜悅，以及生命要給我的美好事物。',
  'affirmation-5': '我一天比一天更有自信。我相信自己。我是有能力的人。',
  'affirmation-6': '我歸於中心。我很專注。在任何狀況下，我都可以保持平靜。',
  'affirmation-7': '我的思想具有創造力。我的思想與話語，正在形塑我的人生。',
  'affirmation-8': '我的收入持續增加。我敞開自己，樂於接受所有美好的事物。',
  'affirmation-9': '今天是生命給我的禮物。這是受到祝福的一天。',
  'affirmation-10': '我帶著愛看待身邊的伙伴。我肯定我的伙伴。',
  'affirmation-11': '親愛的孩子，我們很高興你來到這個世界。我們愛你。',
  'affirmation-12': '我愛你，冠均。我很安全，一切都很好。今天是受到祝福的一天。',
  'affirmation-13':
    '九段 Affirmation 練習：連結自己、安全感、接納、能力、關係、創造、金錢、感恩、今日意圖。',
};

export function siteUrl(path: string = '/'): string {
  if (path === '/' || path === '') {
    return `${SITE_ORIGIN}/`;
  }
  return `${SITE_ORIGIN}${path.startsWith('/') ? path : `/${path}`}`;
}

export function homeSeoTitle(): string {
  return `感恩日記｜${SITE_NAME}`;
}

export function homeSeoDescription(): string {
  return SITE_DESCRIPTION;
}

export function journalCanonicalPath(id: string): string {
  return `/journals/${id}`;
}

export function journalSeoTitle(id: string): string {
  const heading = journalSubtitle(id);
  const day = journalDayLabel(id);
  return `${heading}｜${day}｜${SITE_NAME}`;
}

export function journalSeoDescription(id: string): string {
  return JOURNAL_DESCRIPTIONS[id] ?? SITE_DESCRIPTION;
}

export function websiteJsonLd(): Record<string, string> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: siteUrl('/'),
    inLanguage: 'zh-Hant',
    description: SITE_DESCRIPTION,
  };
}

export function articleJsonLd(journal: Journal): Record<string, string> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: journalSubtitle(journal.id),
    description: journalSeoDescription(journal.id),
    datePublished: journal.createdAt,
    inLanguage: 'zh-Hant',
    url: siteUrl(journalCanonicalPath(journal.id)),
  };
}

export function sitemapPaths(): readonly string[] {
  return ['/', ...JOURNALS.map((item) => journalCanonicalPath(item.id))];
}
