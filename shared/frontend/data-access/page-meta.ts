import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {
  SITE_NAME,
  articleJsonLd,
  homeSeoDescription,
  homeSeoTitle,
  journalCanonicalPath,
  journalSeoDescription,
  journalSeoTitle,
  siteUrl,
  websiteJsonLd,
  type Journal,
} from '@app/contracts';

const JSON_LD_ID = 'grateful-jsonld';

@Injectable({ providedIn: 'root' })
export class PageMeta {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  setHome(): void {
    this.apply({
      title: homeSeoTitle(),
      description: homeSeoDescription(),
      url: siteUrl('/'),
      type: 'website',
      jsonLd: websiteJsonLd(),
    });
  }

  setJournal(journal: Journal): void {
    this.apply({
      title: journalSeoTitle(journal.id),
      description: journalSeoDescription(journal.id),
      url: siteUrl(journalCanonicalPath(journal.id)),
      type: 'article',
      jsonLd: articleJsonLd(journal),
    });
  }

  private apply(input: {
    title: string;
    description: string;
    url: string;
    type: 'website' | 'article';
    jsonLd: Record<string, string>;
  }): void {
    this.title.setTitle(input.title);
    this.meta.updateTag({ name: 'description', content: input.description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ property: 'og:title', content: input.title });
    this.meta.updateTag({ property: 'og:description', content: input.description });
    this.meta.updateTag({ property: 'og:url', content: input.url });
    this.meta.updateTag({ property: 'og:type', content: input.type });
    this.meta.updateTag({ property: 'og:locale', content: 'zh_TW' });
    this.meta.updateTag({ property: 'og:site_name', content: SITE_NAME });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:title', content: input.title });
    this.meta.updateTag({ name: 'twitter:description', content: input.description });
    this.setCanonical(input.url);
    this.setJsonLd(input.jsonLd);
  }

  private setCanonical(url: string): void {
    let link = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.rel = 'canonical';
      this.document.head.appendChild(link);
    }
    link.href = url;
  }

  private setJsonLd(data: Record<string, string>): void {
    let script = this.document.getElementById(JSON_LD_ID) as HTMLScriptElement | null;
    if (!script) {
      script = this.document.createElement('script');
      script.id = JSON_LD_ID;
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
  }
}
