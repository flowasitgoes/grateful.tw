import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';
import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  htmlLang,
  isLocale,
  type Locale,
} from '@app/contracts';

@Injectable({ providedIn: 'root' })
export class LocaleService {
  private readonly document = inject(DOCUMENT);
  readonly locale = signal<Locale>(this.readInitial());

  constructor() {
    this.applyDocumentLang(this.locale());
  }

  setLocale(locale: Locale): void {
    if (this.locale() === locale) {
      return;
    }
    this.locale.set(locale);
    try {
      globalThis.localStorage?.setItem(LOCALE_STORAGE_KEY, locale);
    } catch {
      /* ignore quota / private mode */
    }
    this.applyDocumentLang(locale);
  }

  private readInitial(): Locale {
    try {
      const stored = globalThis.localStorage?.getItem(LOCALE_STORAGE_KEY);
      if (isLocale(stored)) {
        return stored;
      }
    } catch {
      /* ignore */
    }
    return DEFAULT_LOCALE;
  }

  private applyDocumentLang(locale: Locale): void {
    this.document.documentElement.lang = htmlLang(locale);
  }
}
