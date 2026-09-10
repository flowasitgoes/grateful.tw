import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { formatJournalDateTime, journalsNewestFirst } from '@app/contracts';

@Component({
  selector: 'grateful-journal-list',
  imports: [RouterLink],
  template: `
    <ul class="journal-list">
      @for (journal of journals; track journal.id) {
        <li>
          <a [routerLink]="['/journals', journal.id]">
            <span class="journal-list-title">{{ journal.title }}</span>
            <time class="journal-list-time" [attr.datetime]="journal.createdAt">{{
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
}
