import { Component, effect, inject } from '@angular/core';
import { LocaleService, PageMeta } from '@app/frontend/data-access';
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
  private readonly pageMeta = inject(PageMeta);
  private readonly localeService = inject(LocaleService);

  constructor() {
    effect(() => {
      this.localeService.locale();
      this.pageMeta.setHome();
    });
  }
}
