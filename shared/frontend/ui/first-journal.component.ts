import { Component, computed, input } from '@angular/core';
import { formatJournalDateTime } from '@app/contracts';

export const FIRST_JOURNAL_TITLE = '冠均的 Affirmation';

@Component({
  selector: 'grateful-first-journal',
  templateUrl: './first-journal.component.html',
})
export class FirstJournalComponent {
  readonly createdAt = input('');
  readonly createdLabel = computed(() => {
    const iso = this.createdAt();
    return iso ? formatJournalDateTime(iso) : '';
  });
}
