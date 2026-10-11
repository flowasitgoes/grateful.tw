import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  formatJournalDateTime,
  journalAdjacent,
  journalCanonicalPath,
  journalDayLabel,
  journalSubtitle,
} from '@app/contracts';

@Component({
  selector: 'grateful-first-journal',
  imports: [RouterLink],
  templateUrl: './first-journal.component.html',
})
export class FirstJournalComponent {
  readonly journalId = input('');
  readonly createdAt = input('');
  readonly heading = computed(() => journalSubtitle(this.journalId()));
  readonly dayLabel = computed(() => {
    const id = this.journalId();
    return id ? journalDayLabel(id) : '';
  });
  readonly createdLabel = computed(() => {
    const iso = this.createdAt();
    return iso ? formatJournalDateTime(iso) : '';
  });
  readonly prevLink = computed(() => {
    const prev = journalAdjacent(this.journalId()).prev;
    if (!prev) {
      return undefined;
    }
    return {
      path: journalCanonicalPath(prev.id),
      day: journalDayLabel(prev.id),
      heading: journalSubtitle(prev.id),
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
      heading: journalSubtitle(next.id),
    };
  });
}
