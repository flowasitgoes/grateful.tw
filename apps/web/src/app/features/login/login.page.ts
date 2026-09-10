import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/frontend/data-access';
import { LoginFormComponent, type LoginFormStatus } from '@app/frontend/ui';

@Component({
  selector: 'app-login-page',
  imports: [LoginFormComponent],
  template: `
    <main>
      <grateful-login-form [status]="status()" (submitted)="onSubmit($event)" />
    </main>
  `,
})
export class LoginPage {
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
