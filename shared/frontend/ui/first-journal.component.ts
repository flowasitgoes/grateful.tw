import { Component, computed, input } from '@angular/core';
import { formatJournalDateTime, journalDayLabel, journalSubtitle } from '@app/contracts';

@Component({
  selector: 'grateful-first-journal',
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
}
