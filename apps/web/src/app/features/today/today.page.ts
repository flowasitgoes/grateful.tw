import { Component } from '@angular/core';
import { FirstJournalComponent } from '@app/frontend/ui';

@Component({
  selector: 'app-today-page',
  imports: [FirstJournalComponent],
  template: `
    <main>
      <grateful-first-journal />
    </main>
  `,
})
export class TodayPage {}
