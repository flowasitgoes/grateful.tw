import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  formatJournalDateTime,
  journalDayLabel,
  journalSubtitle,
  journalsNewestFirst,
} from '@app/contracts';

@Component({
  selector: 'grateful-journal-list',
  imports: [RouterLink],
  template: `
    <ul class="journal-grid">
      @for (journal of journals; track journal.id) {
        <li>
          <a [routerLink]="['/journals', journal.id]">
            <span class="journal-grid-meta">
              <span class="journal-grid-day">{{ dayLabel(journal.id) }}</span>
              <span class="journal-grid-sub">{{ subtitle(journal.id) }}</span>
            </span>
            <span class="journal-grid-title">{{ journal.title }}</span>
            <time class="journal-grid-time" [attr.datetime]="journal.createdAt">{{
              format(journal.createdAt)
            }}</time>
          </a>
        </li>
      }
    </ul>
  `,
})
export class JournalListComponent {
  readonly journals = journalsNewestFirst();
  readonly format = formatJournalDateTime;
  readonly dayLabel = journalDayLabel;
  readonly subtitle = journalSubtitle;
}
