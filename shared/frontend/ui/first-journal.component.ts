import { Component, computed, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import {
  formatJournalDateTime,
  journalAdjacent,
  journalCanonicalPath,
  journalDayLabel,
  journalSubtitle,
} from '@app/contracts';
import { LocaleService } from '@app/frontend/data-access';
import { uiCopy } from './copy';
import { JOURNAL_BODIES_EN } from './journal-bodies.en';

@Component({
  selector: 'grateful-first-journal',
  imports: [RouterLink],
  templateUrl: './first-journal.component.html',
})
export class FirstJournalComponent {
  private readonly localeService = inject(LocaleService);
  private readonly sanitizer = inject(DomSanitizer);

  readonly journalId = input('');
  readonly createdAt = input('');
  readonly locale = this.localeService.locale;
  readonly copy = computed(() => uiCopy(this.locale()));
  readonly heading = computed(() => journalSubtitle(this.journalId(), this.locale()));
  readonly dayLabel = computed(() => {
    const id = this.journalId();
    return id ? journalDayLabel(id) : '';
  });
  readonly createdLabel = computed(() => {
    const iso = this.createdAt();
    return iso ? formatJournalDateTime(iso) : '';
  });
  readonly enBody = computed(() => {
    const html = JOURNAL_BODIES_EN[this.journalId()];
    return html ? this.sanitizer.bypassSecurityTrustHtml(html) : '';
  });
  readonly prevLink = computed(() => {
    const prev = journalAdjacent(this.journalId()).prev;
    if (!prev) {
      return undefined;
    }
    return {
      path: journalCanonicalPath(prev.id),
      day: journalDayLabel(prev.id),
      heading: journalSubtitle(prev.id, this.locale()),
    };
  });
  readonly nextLink = computed(() => {
    const next = journalAdjacent(this.journalId()).next;
    if (!next) {
      return undefined;
    }
    return {
      path: journalCanonicalPath(next.id),
      day: journalDayLabel(next.id),
      heading: journalSubtitle(next.id, this.locale()),
    };
  });
}
