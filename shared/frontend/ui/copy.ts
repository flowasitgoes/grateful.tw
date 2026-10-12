import { DEFAULT_LOCALE, type Locale } from '@app/contracts';

export const INSTAGRAM_HREF = 'https://www.instagram.com/riddles.tw';

const COPY_ZH = {
  menu: '選單',
  menuClose: '關閉',
  back: '返回',
  instagram: 'riddles.tw',
  langZh: '中文',
  langEn: 'EN',
  langSwitch: '語言',
  pagerNav: '相鄰短箋',
  prev: '上一篇',
  next: '下一篇',
  loginTitle: '登入',
  loginButton: '登入',
  loginLoading: '登入中',
  loginFailed: '登入失敗',
  todayTitle: '今天',
  save: '儲存',
  logout: '登出',
  sectionHint: '1～3 句，可留空。',
  reading: '讀取中',
  readFailed: '讀取失敗',
  saving: '儲存中',
  saveFailed: '儲存失敗',
  saved: '已儲存',
} as const;

const COPY_EN = {
  menu: 'Menu',
  menuClose: 'Close',
  back: 'Back',
  instagram: 'riddles.tw',
  langZh: '中文',
  langEn: 'EN',
  langSwitch: 'Language',
  pagerNav: 'Adjacent entries',
  prev: 'Previous',
  next: 'Next',
  loginTitle: 'Sign in',
  loginButton: 'Sign in',
  loginLoading: 'Signing in',
  loginFailed: 'Sign-in failed',
  todayTitle: 'Today',
  save: 'Save',
  logout: 'Sign out',
  sectionHint: '1–3 sentences; optional.',
  reading: 'Loading',
  readFailed: 'Failed to load',
  saving: 'Saving',
  saveFailed: 'Failed to save',
  saved: 'Saved',
} as const;

export type UiCopy = { readonly [K in keyof typeof COPY_ZH]: string };

/** @deprecated Prefer uiCopy(locale). Kept for non-locale callers during migration. */
export const COPY: UiCopy = COPY_ZH;

export function uiCopy(locale: Locale = DEFAULT_LOCALE): UiCopy {
  return locale === 'en' ? COPY_EN : COPY_ZH;
}
