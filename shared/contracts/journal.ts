import { DEFAULT_LOCALE, type Locale } from './locale';

export interface Journal {
  id: string;
  title: string;
  createdAt: string;
}

export const JOURNAL_TITLE = '感恩日記';
export const JOURNAL_TITLE_EN = 'Gratitude Journal';

export const JOURNAL_COUNT = 54;

export const JOURNAL_HEADINGS: Readonly<Record<string, string>> = {
  'affirmation-1': '愛、信任與安全感',
  'affirmation-2': '自愛與自我接納',
  'affirmation-3': '內在小孩與療癒',
  'affirmation-4': '愛與親密關係',
  'affirmation-5': '自信、能力與力量',
  'affirmation-6': '專注、平靜與生活節奏',
  'affirmation-7': '創造力、工作與志向',
  'affirmation-8': '金錢、豐盛與接受',
  'affirmation-9': '感恩與接受',
  'affirmation-10': '對伙伴與他人的祝福',
  'affirmation-11': '給孩子們的祝福',
  'affirmation-12': '每日精簡版',
  'affirmation-13': '系統化 Affirmation 結構',
  'affirmation-14': '我願意理解並且接受你',
  'affirmation-15': '愛情裡的安全感',
  'affirmation-16': '自信與自我價值',
  'affirmation-17': '我的價值不需要透過比較來證明',
  'affirmation-18': '我在親密關係中是安全的',
  'affirmation-19': '我選擇輕鬆、自在地生活',
  'affirmation-20': '我值得被愛、被關心、被重視',
  'affirmation-21': '表達真實的自己是安全的',
  'affirmation-22': '不同意見與誤會，不代表關係會結束',
  'affirmation-23': '我可以輕鬆、自在地做自己',
  'affirmation-24': '我在別人心中是重要的',
  'affirmation-25': '我值得擁有親密的連結，也允許自己被愛',
  'affirmation-26': '我值得被慷慨、體貼地對待',
  'affirmation-27': '我的感受、意願與選擇值得被尊重',
  'affirmation-28': '我值得被欣賞、被喜歡',
  'affirmation-29': '我值得被主動親近、被溫柔地愛',
  'affirmation-30': '愛與關係滋養我的創造力',
  'affirmation-31': '我值得被支持，我的創造力值得被看見',
  'affirmation-32': '我值得與愛的人共同創造美好的生活',
  'affirmation-33': '我選擇用有意識的愛與誠懇對待世界',
  'affirmation-34': '我值得擁有讓自己安心、被尊重的關係',
  'affirmation-35': '我感謝健康的身體，讓我體驗生命的豐盛',
  'affirmation-36': '世界豐富得展開，我正處於一個新的階段',
  'affirmation-37': '我選擇相信，我的身體是有力量的',
  'affirmation-38': '我感謝眼前這份美好',
  'affirmation-39': '給自己的慈愛：願我平安、健康、幸福',
  'affirmation-40': '給她人與所愛的人：願你幸福，願你自由',
  'affirmation-41': '給身邊的人：願每個人都被善待',
  'affirmation-42': '給陌生人與所有生命：願一切眾生安樂',
  'affirmation-43': '慈愛與界線：願我在關係中保持溫柔與智慧',
  'affirmation-44': '慈愛的生活：願我的存在為世界帶來美好',
  'affirmation-45': '每日慈心給予自己',
  'affirmation-46': '感謝大地，提供製作床墊的材料',
  'affirmation-47': '感謝原料生產者，將自然資源帶進人類生活',
  'affirmation-48': '感謝工程師、工廠與所有製造床墊的人',
  'affirmation-49': '感謝物流、門市與所有讓床墊來到我面前的人',
  'affirmation-50': '「山式」Mountain Pose',
  'affirmation-51': '感謝妳幫助我感覺自己很好',
  'affirmation-52': '我值得被溫柔地支持，感受到尊嚴、自信與完整',
  'affirmation-53': '感謝我們可以一起想像未來',
  'affirmation-54': '一個人的界線不是對我的否定',
};

export const JOURNAL_HEADINGS_EN: Readonly<Record<string, string>> = {
  'affirmation-1': 'Love, Trust, and Safety',
  'affirmation-2': 'Self-Love and Self-Acceptance',
  'affirmation-3': 'Inner Child and Healing',
  'affirmation-4': 'Love and Intimate Relationships',
  'affirmation-5': 'Confidence, Ability, and Strength',
  'affirmation-6': 'Focus, Calm, and Life Rhythm',
  'affirmation-7': 'Creativity, Work, and Aspiration',
  'affirmation-8': 'Money, Abundance, and Receiving',
  'affirmation-9': 'Gratitude and Receiving',
  'affirmation-10': 'Blessings for Partners and Others',
  'affirmation-11': 'Blessings for the Children',
  'affirmation-12': 'Daily Short Version',
  'affirmation-13': 'Structured Affirmation Practice',
  'affirmation-14': 'I Am Willing to Understand and Accept You',
  'affirmation-15': 'Safety in Love',
  'affirmation-16': 'Confidence and Self-Worth',
  'affirmation-17': 'My Worth Does Not Need Comparison',
  'affirmation-18': 'I Am Safe in Intimate Relationships',
  'affirmation-19': 'I Choose to Live Lightly and Freely',
  'affirmation-20': 'I Deserve to Be Loved, Cared For, and Valued',
  'affirmation-21': 'It Is Safe to Express My True Self',
  'affirmation-22': 'Disagreement Does Not Mean the Relationship Ends',
  'affirmation-23': 'I Can Relax and Be Myself',
  'affirmation-24': 'I Matter to the People I Love',
  'affirmation-25': 'I Deserve Intimate Connection and Allow Myself to Be Loved',
  'affirmation-26': 'I Deserve to Be Treated with Generosity and Care',
  'affirmation-27': 'My Feelings, Wishes, and Choices Deserve Respect',
  'affirmation-28': 'I Deserve to Be Appreciated and Liked',
  'affirmation-29': 'I Deserve Warm Closeness and Gentle Love',
  'affirmation-30': 'Love and Relationships Nourish My Creativity',
  'affirmation-31': 'I Deserve Support; My Creativity Deserves to Be Seen',
  'affirmation-32': 'I Deserve to Create a Beautiful Life with Someone I Love',
  'affirmation-33': 'I Choose Conscious Love and Sincerity Toward the World',
  'affirmation-34': 'I Deserve Relationships Where I Feel Safe and Respected',
  'affirmation-35': 'I Thank My Healthy Body for Letting Me Experience Life’s Abundance',
  'affirmation-36': 'The World Unfolds Richly; I Am in a New Stage',
  'affirmation-37': 'I Choose to Trust That My Body Has Strength',
  'affirmation-38': 'I Am Grateful for This Beauty Before Me',
  'affirmation-39': 'Loving-Kindness for Myself: May I Be Safe, Healthy, and Happy',
  'affirmation-40': 'For Her and Those I Love: May You Be Happy, May You Be Free',
  'affirmation-41': 'For People Around Me: May Everyone Be Treated with Kindness',
  'affirmation-42': 'For Strangers and All Life: May All Beings Be Well',
  'affirmation-43': 'Loving-Kindness and Boundaries: Softness and Wisdom in Relationship',
  'affirmation-44': 'A Life of Loving-Kindness: May My Presence Bring Good into the World',
  'affirmation-45': 'Daily Loving-Kindness Beginning with Myself',
  'affirmation-46': 'Thanking the Earth for the Materials That Made This Mattress',
  'affirmation-47': 'Thanking Producers Who Bring Natural Resources into Human Life',
  'affirmation-48': 'Thanking Engineers, Factories, and Everyone Who Makes Mattresses',
  'affirmation-49': 'Thanking Logistics, Stores, and Everyone Who Brought This Mattress to Me',
  'affirmation-50': 'Mountain Pose',
  'affirmation-51': 'Thank You for Helping Me Feel Good About Myself',
  'affirmation-52': 'I Deserve Gentle Support, Dignity, Confidence, and Wholeness',
  'affirmation-53': 'Grateful We Can Imagine the Future Together',
  'affirmation-54': 'Someone’s Boundary Is Not a Rejection of Me',
};

function journalCreatedAt(n: number): string {
  if (n === 14) {
    return '2026-10-10T22:18:00+08:00';
  }
  if (n === 15) {
    return '2026-10-12T00:32:00+08:00';
  }
  if (n === 16) {
    return '2026-10-12T00:34:00+08:00';
  }
  if (n === 17) {
    return '2026-10-12T00:37:00+08:00';
  }
  if (n === 18) {
    return '2026-10-12T00:39:00+08:00';
  }
  if (n === 19) {
    return '2026-10-12T00:40:00+08:00';
  }
  if (n === 20) {
    return '2026-10-12T00:41:00+08:00';
  }
  if (n === 21) {
    return '2026-10-12T00:42:00+08:00';
  }
  if (n === 22) {
    return '2026-10-12T00:43:00+08:00';
  }
  if (n === 23) {
    return '2026-10-12T00:45:00+08:00';
  }
  if (n === 24) {
    return '2026-10-12T00:47:00+08:00';
  }
  if (n === 25) {
    return '2026-10-12T00:49:00+08:00';
  }
  if (n === 26) {
    return '2026-10-12T00:51:00+08:00';
  }
  if (n === 27) {
    return '2026-10-12T00:52:00+08:00';
  }
  if (n === 28) {
    return '2026-10-12T00:53:00+08:00';
  }
  if (n === 29) {
    return '2026-10-12T00:54:00+08:00';
  }
  if (n === 30) {
    return '2026-10-12T00:55:00+08:00';
  }
  if (n === 31) {
    return '2026-10-12T00:56:00+08:00';
  }
  if (n === 32) {
    return '2026-10-12T00:58:00+08:00';
  }
  if (n === 33) {
    return '2026-10-12T00:59:00+08:00';
  }
  if (n === 34) {
    return '2026-10-12T01:00:00+08:00';
  }
  if (n === 35) {
    return '2026-10-12T01:01:00+08:00';
  }
  if (n === 36) {
    return '2026-10-13T10:07:00+08:00';
  }
  if (n === 37) {
    return '2026-10-13T10:09:00+08:00';
  }
  if (n === 38) {
    return '2026-10-13T10:11:00+08:00';
  }
  if (n === 39) {
    return '2026-10-13T10:13:00+08:00';
  }
  if (n === 40) {
    return '2026-10-13T10:18:00+08:00';
  }
  if (n === 41) {
    return '2026-10-13T10:19:00+08:00';
  }
  if (n === 42) {
    return '2026-10-13T10:21:00+08:00';
  }
  if (n === 43) {
    return '2026-10-13T10:22:00+08:00';
  }
  if (n === 44) {
    return '2026-10-13T10:23:00+08:00';
  }
  if (n === 45) {
    return '2026-10-13T10:25:00+08:00';
  }
  if (n === 46) {
    return '2026-10-13T10:26:00+08:00';
  }
  if (n === 47) {
    return '2026-10-13T10:27:00+08:00';
  }
  if (n === 48) {
    return '2026-10-13T10:28:00+08:00';
  }
  if (n === 49) {
    return '2026-10-13T10:30:00+08:00';
  }
  if (n === 50) {
    return '2026-10-13T10:32:00+08:00';
  }
  if (n === 51) {
    return '2026-10-14T11:21:00+08:00';
  }
  if (n === 52) {
    return '2026-10-14T11:24:00+08:00';
  }
  if (n === 53) {
    return '2026-10-14T11:30:00+08:00';
  }
  if (n === 54) {
    return '2026-10-15T01:23:00+08:00';
  }
  return `2026-09-${String(n).padStart(2, '0')}T17:08:00+08:00`;
}

export const JOURNALS: readonly Journal[] = Array.from({ length: JOURNAL_COUNT }, (_, index) => {
  const n = index + 1;
  return {
    id: `affirmation-${n}`,
    title: JOURNAL_TITLE,
    createdAt: journalCreatedAt(n),
  };
});

export function journalsNewestFirst(items: readonly Journal[] = JOURNALS): Journal[] {
  return [...items].sort((a, b) => (a.createdAt < b.createdAt ? 1 : a.createdAt > b.createdAt ? -1 : 0));
}

export function findJournal(id: string): Journal | undefined {
  return JOURNALS.find((item) => item.id === id);
}

export function journalDayNumber(id: string): number {
  const n = Number(id.replace(/^affirmation-/, ''));
  return Number.isFinite(n) ? n : NaN;
}

/** Adjacent by Day number（Day 1…N），供閱讀頁上一篇／下一篇。 */
export function journalAdjacent(id: string): {
  prev: Journal | undefined;
  next: Journal | undefined;
} {
  const n = journalDayNumber(id);
  if (!Number.isFinite(n)) {
    return { prev: undefined, next: undefined };
  }
  return {
    prev: n > 1 ? findJournal(`affirmation-${n - 1}`) : undefined,
    next: n < JOURNAL_COUNT ? findJournal(`affirmation-${n + 1}`) : undefined,
  };
}

export function journalDayLabel(id: string): string {
  return `Day ${id.replace(/^affirmation-/, '')}`;
}

export function journalListTitle(locale: Locale = DEFAULT_LOCALE): string {
  return locale === 'en' ? JOURNAL_TITLE_EN : JOURNAL_TITLE;
}

export function journalSubtitle(id: string, locale: Locale = DEFAULT_LOCALE): string {
  if (locale === 'en') {
    return JOURNAL_HEADINGS_EN[id] ?? JOURNAL_HEADINGS[id] ?? '';
  }
  return JOURNAL_HEADINGS[id] ?? '';
}

export function formatJournalDateTime(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) {
    return iso;
  }
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Taipei',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date);
  const value = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? '';
  return `${value('year')}-${value('month')}-${value('day')} ${value('hour')}:${value('minute')}`;
}
