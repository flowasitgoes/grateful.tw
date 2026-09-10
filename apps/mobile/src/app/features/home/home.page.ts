import { Component, inject } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { PageMeta } from '@app/frontend/data-access';
import { JournalListComponent, ShellComponent } from '@app/frontend/ui';

@Component({
  selector: 'mobile-home-page',
  imports: [IonContent, ShellComponent, JournalListComponent],
  template: `
    <ion-content [fullscreen]="true">
      <grateful-shell>
        <grateful-journal-list />
      </grateful-shell>
    </ion-content>
  `,
})
export class HomePage {
  constructor() {
    inject(PageMeta).setHome();
  }
}
