import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { FIRST_JOURNAL_TITLE, FirstJournalComponent } from '@app/frontend/ui';

@Component({
  selector: 'mobile-today-page',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, FirstJournalComponent],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ title }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content [fullscreen]="true">
      <grateful-first-journal />
    </ion-content>
  `,
})
export class TodayPage {
  readonly title = FIRST_JOURNAL_TITLE;
}
