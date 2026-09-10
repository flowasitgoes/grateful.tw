import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'mobile-root',
  imports: [IonApp, IonRouterOutlet],
  template: `
    <ion-app>
      <ion-router-outlet />
    </ion-app>
  `,
})
export class AppComponent {}
