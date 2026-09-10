import { Component } from '@angular/core';
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
export class HomePage {}
