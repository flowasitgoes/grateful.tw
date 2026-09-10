import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { AuthService } from '@app/frontend/data-access';
import { COPY, LoginFormComponent, type LoginFormStatus } from '@app/frontend/ui';

@Component({
  selector: 'mobile-login-page',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, LoginFormComponent],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ copy.loginTitle }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content [fullscreen]="true">
      <grateful-login-form [showHeading]="false" [status]="status()" (submitted)="onSubmit($event)" />
    </ion-content>
  `,
})
export class LoginPage {
  readonly copy = COPY;
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  readonly status = signal<LoginFormStatus>('idle');

  async onSubmit(credentials: { email: string; password: string }): Promise<void> {
    this.status.set('loading');
    try {
      await this.auth.signIn(credentials.email, credentials.password);
      await this.router.navigateByUrl('/today');
    } catch {
      this.status.set('error');
    }
  }
}
