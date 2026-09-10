import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'mobile-home-page',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>grateful.tw</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content [fullscreen]="true"></ion-content>
  `,
})
export class HomePage {}
