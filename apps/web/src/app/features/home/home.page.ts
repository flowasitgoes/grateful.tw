import { Component, inject } from '@angular/core';
import { PageMeta } from '@app/frontend/data-access';
import { JournalListComponent, ShellComponent } from '@app/frontend/ui';

@Component({
  selector: 'app-home-page',
  imports: [ShellComponent, JournalListComponent],
  template: `
    <grateful-shell>
      <grateful-journal-list />
    </grateful-shell>
  `,
})
export class HomePage {
  constructor() {
    inject(PageMeta).setHome();
  }
}
