import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  formatJournalDateTime,
  journalDayLabel,
  journalListTitle,
  journalSubtitle,
  journalsNewestFirst,
} from '@app/contracts';
import { LocaleService } from '@app/frontend/data-access';

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
            <span class="journal-grid-title">{{ listTitle() }}</span>
            <!-- 暫隱藏時間
            <time class="journal-grid-time" [attr.datetime]="journal.createdAt">{{
              format(journal.createdAt)
            }}</time>
            -->
          </a>
        </li>
      }
    </ul>
  `,
})
export class JournalListComponent {
  private readonly localeService = inject(LocaleService);
  readonly journals = journalsNewestFirst();
  readonly format = formatJournalDateTime;
  readonly dayLabel = journalDayLabel;
  readonly listTitle = () => journalListTitle(this.localeService.locale());
  readonly subtitle = (id: string) => journalSubtitle(id, this.localeService.locale());
}
