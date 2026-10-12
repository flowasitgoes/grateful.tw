export type Locale = 'zh' | 'en';

export const DEFAULT_LOCALE: Locale = 'zh';
export const LOCALE_STORAGE_KEY = 'grateful.locale';

export function isLocale(value: unknown): value is Locale {
  return value === 'zh' || value === 'en';
}

export function htmlLang(locale: Locale): string {
  return locale === 'en' ? 'en' : 'zh-Hant';
}
