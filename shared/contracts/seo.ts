import {
  JOURNALS,
  findJournal,
  journalDayLabel,
  journalSubtitle,
  type Journal,
} from './journal';

export const SITE_NAME = 'grateful.tw';
export const SITE_ORIGIN = 'https://grateful.tw';
export const SITE_AUTHOR = '冠均';
export const SITE_DESCRIPTION =
  'grateful.tw 是冠均的繁體中文感恩日記與肯定語（Affirmation）練習站，收錄三十五篇只讀短箋，主題含自愛、安全感、親密關係與創造力。';
export const SITE_SAME_AS = ['https://www.instagram.com/riddles.tw'] as const;
/** 填入 Google Search Console 驗證碼後會輸出 meta；空白則不輸出。 */
export const SITE_GOOGLE_VERIFICATION = '';
export const SITE_OG_IMAGE_PATH = '/og-image.png';
export const SITE_OG_IMAGE_WIDTH = '1200';
export const SITE_OG_IMAGE_HEIGHT = '630';

/** Search Console／AI 搜尋優先對齊的核心查詢詞（5～8 個）。 */
export const CORE_SEARCH_KEYWORDS = [
  '感恩日記',
  '每日感恩',
  '肯定語',
  'Affirmation',
  '自愛',
  '安全感',
  '親密關係',
  '創造力',
] as const;

export type JsonLd = Record<string, unknown>;

/** 每篇 1～2 個主題詞，供 description 與 JSON-LD keywords／about。 */
export const JOURNAL_KEYWORDS: Readonly<Record<string, readonly string[]>> = {
  'affirmation-1': ['安全感', '肯定語'],
  'affirmation-2': ['自愛', '自我接納'],
  'affirmation-3': ['內在小孩', '療癒'],
  'affirmation-4': ['親密關係', '肯定語'],
  'affirmation-5': ['自信', '肯定語'],
  'affirmation-6': ['平靜', '專注'],
  'affirmation-7': ['創造力', '志向'],
  'affirmation-8': ['豐盛', '金錢'],
  'affirmation-9': ['感恩', '接受'],
  'affirmation-10': ['祝福', '伙伴'],
  'affirmation-11': ['祝福', '孩子'],
  'affirmation-12': ['每日感恩', '肯定語'],
  'affirmation-13': ['Affirmation', '肯定語練習'],
  'affirmation-14': ['理解', '接受'],
  'affirmation-15': ['安全感', '親密關係'],
  'affirmation-16': ['自信', '自我價值'],
  'affirmation-17': ['自我價值', '被愛'],
  'affirmation-18': ['安全感', '親密關係'],
  'affirmation-19': ['自在', '肯定語'],
  'affirmation-20': ['被愛', '被關心'],
  'affirmation-21': ['表達', '安全感'],
  'affirmation-22': ['溝通', '親密關係'],
  'affirmation-23': ['做自己', '自在'],
  'affirmation-24': ['被重視', '親密關係'],
  'affirmation-25': ['親密連結', '被愛'],
  'affirmation-26': ['被照顧', '體貼'],
  'affirmation-27': ['被尊重', '感受'],
  'affirmation-28': ['被欣賞', '被喜歡'],
  'affirmation-29': ['被愛', '親密'],
  'affirmation-30': ['創造力', '關係'],
  'affirmation-31': ['創造力', '被看見'],
  'affirmation-32': ['共同生活', '親密關係'],
  'affirmation-33': ['有意識的愛', '善意'],
  'affirmation-34': ['安全感', '被尊重'],
  'affirmation-35': ['健康', '感恩'],
};

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
  'affirmation-14':
    '謝謝你剛剛來找我，願意跟我分享你的想法和情緒。想要以後在你家一起創造更多溫馨的時光。希望以後能帶給你一個安全舒服可以表達的空間。',
  'affirmation-15':
    '我可以安全地表達自己的情緒、想法與需求。即使我們有不同意見，也可以繼續溝通、理解與修復關係。',
  'affirmation-16':
    '我相信自己。我的感受很重要。我的喜好、想法與選擇都值得被尊重。',
  'affirmation-17':
    '我本來就值得被愛、被尊重、被善待。我的收入、財富、居住環境與物質條件，都不能定義我的全部價值。',
  'affirmation-18':
    '我值得擁有溫柔、真誠、互相理解的關係。我可以安心地表達自己的感受，包括脆弱、不安與不同意見。',
  'affirmation-19':
    '我允許事情比自己想像的更加簡單。我可以放下不必要的比較、猜測與擔憂。我相信自己。我支持自己。我站在自己這一邊。',
  'affirmation-20':
    '我值得被愛。我值得被關心、被在乎、被放在心上。我不需要努力證明自己的價值，才能獲得愛。',
  'affirmation-21':
    '我的感受很重要。我的想法、情緒、需求與意見，都值得被聆聽與理解。表達真實的自己是安全的。',
  'affirmation-22':
    '我允許自己和別人有不同的意見。一次誤會，不代表我會被拋棄。我相信健康的關係，有能力容納差異、理解彼此並修復誤會。',
  'affirmation-23':
    '我允許自己放鬆。我可以自然地說話、開玩笑、表達喜好與不同意見。我允許愛是輕鬆的、自由的、溫柔的。',
  'affirmation-24':
    '我值得被愛、被重視、被放在心上。我的存在對我愛的人而言是重要的。我值得擁有真誠、敞開、相互信任的關係。',
  'affirmation-25':
    '我可以帶著好奇與信任，向別人提出問題。我允許自己接受已經存在的愛。我值得擁有親密、自然、輕鬆而自在的連結。',
  'affirmation-26':
    '我值得被愛、被關心、被照顧。我值得別人主動為我著想，願意為我付出時間、心力與資源。',
  'affirmation-27':
    '我的想法與感受很重要。我值得在生活中的每一個細節裡，被尊重、被考慮、被在乎。',
  'affirmation-28':
    '我值得被欣賞。我的外表、氣質、品味與獨特性，都值得被看見與喜愛。我允許自己接受別人真誠的讚美與欣賞。',
  'affirmation-29':
    '我值得被愛、被擁抱、被牽手、被親近。我值得有人主動向我靠近，自然地表達愛意。',
  'affirmation-30':
    '我值得擁有能夠彼此啟發、欣賞與支持的關係。我允許自己在愛裡成長，在美好的生活體驗中獲得靈感。',
  'affirmation-31':
    '我值得有人關心我的夢想、創作與表演。我的創造力值得被看見，我也值得擁有欣賞、支持並啟發我的人。',
  'affirmation-32':
    '我值得擁有舒服、健康、溫暖且有品質的生活。我值得擁有一段能夠一起解決問題、改善生活、創造美好未來的關係。',
  'affirmation-33':
    '我相信每一個生命都值得被尊重、被珍惜、被善待。我願意有意識地將愛帶進每一次相遇。',
  'affirmation-34':
    '我值得被關心、被在乎、被尊重。我可以在關係中感到安全、放鬆、被愛，也能自在地信任與溝通。',
  'affirmation-35':
    '我愛我的身體。我感謝自己的身體，讓我能夠行走、擁抱、親密、玩樂、探索與創造。',
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

export function journalOgImagePath(id: string): string {
  return `/og/${id}.jpg`;
}

export function journalKeywords(id: string): readonly string[] {
  return JOURNAL_KEYWORDS[id] ?? ['感恩日記', '肯定語'];
}

export function journalSeoTitle(id: string): string {
  const heading = journalSubtitle(id);
  const day = journalDayLabel(id);
  return `${heading}｜感恩日記 ${day}｜${SITE_NAME}`;
}

export function journalSeoDescription(id: string): string {
  const heading = journalSubtitle(id);
  const opening = JOURNAL_DESCRIPTIONS[id] ?? SITE_DESCRIPTION;
  const topics = journalKeywords(id).join('、');
  return `感恩日記｜${heading}。${opening} 適合每日感恩日記與肯定語練習，主題：${topics}。`;
}

export function journalOgImageAlt(id: string): string {
  return `${journalSubtitle(id)}｜感恩日記`;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function replaceMetaContent(
  html: string,
  attr: 'name' | 'property',
  key: string,
  content: string,
): string {
  const attrPattern = new RegExp(`\\b${attr}=["']${key}["']`, 'i');
  return html.replace(/<meta\b[^>]*>/gi, (tag) => {
    if (!attrPattern.test(tag)) {
      return tag;
    }
    if (/\bcontent=/i.test(tag)) {
      return tag.replace(/\bcontent=(["'])[\s\S]*?\1/i, `content="${escapeHtml(content)}"`);
    }
    return tag.replace(/\s*\/?>$/, ` content="${escapeHtml(content)}"$&`);
  });
}

function replaceCanonicalHref(html: string, href: string): string {
  return html.replace(/<link\b[^>]*>/gi, (tag) => {
    if (!/\brel=["']canonical["']/i.test(tag)) {
      return tag;
    }
    if (/\bhref=/i.test(tag)) {
      return tag.replace(/\bhref=(["'])[\s\S]*?\1/i, `href="${escapeHtml(href)}"`);
    }
    return `<link rel="canonical" href="${escapeHtml(href)}" />`;
  });
}

/** Build-time: stamp SPA shell HTML with per-journal OG／meta for crawlers (e.g. Facebook). */
export function applyJournalShareMetaHtml(html: string, id: string): string {
  const journal = findJournal(id);
  if (!journal) {
    throw new Error(`Unknown journal id: ${id}`);
  }

  const title = journalSeoTitle(id);
  const description = journalSeoDescription(id);
  const url = siteUrl(journalCanonicalPath(id));
  const image = siteUrl(journalOgImagePath(id));
  const imageAlt = journalOgImageAlt(id);
  const jsonLd = JSON.stringify(articleJsonLd(journal));

  let out = html;
  out = out.replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(title)}</title>`);
  out = replaceMetaContent(out, 'name', 'description', description);
  out = replaceCanonicalHref(out, url);
  out = replaceMetaContent(out, 'property', 'og:type', 'article');
  out = replaceMetaContent(out, 'property', 'og:title', title);
  out = replaceMetaContent(out, 'property', 'og:description', description);
  out = replaceMetaContent(out, 'property', 'og:url', url);
  out = replaceMetaContent(out, 'property', 'og:image', image);
  out = replaceMetaContent(out, 'property', 'og:image:alt', imageAlt);
  out = replaceMetaContent(out, 'name', 'twitter:title', title);
  out = replaceMetaContent(out, 'name', 'twitter:description', description);
  out = replaceMetaContent(out, 'name', 'twitter:image', image);

  const jsonLdTag = `<script type="application/ld+json" id="grateful-jsonld">${jsonLd}</script>`;
  if (/id=["']grateful-jsonld["']/.test(out)) {
    out = out.replace(
      /<script\b[^>]*id=["']grateful-jsonld["'][^>]*>[\s\S]*?<\/script>/i,
      jsonLdTag,
    );
  } else {
    out = out.replace(/<\/head>/i, `    ${jsonLdTag}\n  </head>`);
  }

  return out;
}

export function websiteJsonLd(): JsonLd {
  return {
    '@type': 'WebSite',
    name: SITE_NAME,
    alternateName: '感恩日記',
    url: siteUrl('/'),
    inLanguage: 'zh-Hant',
    description: SITE_DESCRIPTION,
    image: siteUrl(SITE_OG_IMAGE_PATH),
    keywords: CORE_SEARCH_KEYWORDS.join(', '),
    about: CORE_SEARCH_KEYWORDS.map((name) => ({
      '@type': 'Thing',
      name,
    })),
    author: {
      '@type': 'Person',
      name: SITE_AUTHOR,
    },
    sameAs: [...SITE_SAME_AS],
    isAccessibleForFree: true,
  };
}

export function itemListJsonLd(): JsonLd {
  return {
    '@type': 'ItemList',
    name: '感恩日記',
    numberOfItems: JOURNALS.length,
    itemListElement: JOURNALS.map((journal, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: journalSubtitle(journal.id),
      url: siteUrl(journalCanonicalPath(journal.id)),
    })),
  };
}

export function homeJsonLd(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@graph': [websiteJsonLd(), itemListJsonLd()],
  };
}

export function articleJsonLd(journal: Journal): JsonLd {
  const keywords = journalKeywords(journal.id);
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: journalSubtitle(journal.id),
    description: journalSeoDescription(journal.id),
    datePublished: journal.createdAt,
    inLanguage: 'zh-Hant',
    url: siteUrl(journalCanonicalPath(journal.id)),
    image: siteUrl(journalOgImagePath(journal.id)),
    author: {
      '@type': 'Person',
      name: SITE_AUTHOR,
    },
    keywords: keywords.join(', '),
    about: keywords.map((name) => ({
      '@type': 'Thing',
      name,
    })),
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      alternateName: '感恩日記',
      url: siteUrl('/'),
    },
    isAccessibleForFree: true,
  };
}

/** https://llmstxt.org/ — short map for AI assistants / answer engines. */
export function renderLlmsTxt(): string {
  const links = JOURNALS.map((journal) => {
    const title = `${journalDayLabel(journal.id)} ${journalSubtitle(journal.id)}`;
    const topics = journalKeywords(journal.id).join('、');
    return `- [${title}](${siteUrl(journalCanonicalPath(journal.id))}): 主題 ${topics}`;
  }).join('\n');

  return `# ${SITE_NAME}

> ${SITE_DESCRIPTION}

本站為繁體中文、只讀的感恩日記與肯定語（Affirmation）短箋。作者：${SITE_AUTHOR}。免費公開閱讀，無登入、無付費牆。

## 網站

- [首頁｜感恩日記列表](${siteUrl('/')})
- [完整篇目與摘要（llms-full.txt）](${siteUrl('/llms-full.txt')})
- [Sitemap](${siteUrl('/sitemap.xml')})

## 核心主題

${CORE_SEARCH_KEYWORDS.map((word) => `- ${word}`).join('\n')}

## 全部短箋

${links}
`;
}

/** Longer source file with per-article openings for citation. */
export function renderLlmsFullTxt(): string {
  const sections = JOURNALS.map((journal) => {
    const title = `${journalDayLabel(journal.id)}｜${journalSubtitle(journal.id)}`;
    const url = siteUrl(journalCanonicalPath(journal.id));
    const opening = JOURNAL_DESCRIPTIONS[journal.id] ?? SITE_DESCRIPTION;
    const topics = journalKeywords(journal.id).join('、');
    return `### ${title}

- URL: ${url}
- 主題: ${topics}
- 摘要: ${opening}
`;
  }).join('\n');

  return `# ${SITE_NAME} — full

> ${SITE_DESCRIPTION}

引用本站內容時，請標明來源 ${SITE_ORIGIN} 與篇名。作者：${SITE_AUTHOR}。

## 全部短箋

${sections}`;
}

export function sitemapPaths(): readonly string[] {
  return ['/', ...JOURNALS.map((item) => journalCanonicalPath(item.id))];
}
