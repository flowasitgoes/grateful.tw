import { Component, input, output } from '@angular/core';
import { COPY } from './copy';
import { ButtonComponent } from './button.component';

export type LoginFormStatus = 'idle' | 'loading' | 'error';

@Component({
  selector: 'grateful-login-form',
  imports: [ButtonComponent],
  template: `
    <form (submit)="onSubmit($event)">
      @if (showHeading()) {
        <h1>{{ copy.loginTitle }}</h1>
      }
      <label>
        email
        <input name="email" type="email" autocomplete="username" required [disabled]="busy()" />
      </label>
      <label>
        密碼
        <input
          name="password"
          type="password"
          autocomplete="current-password"
          required
          [disabled]="busy()"
        />
      </label>
      <grateful-button type="submit" [disabled]="busy()">{{ copy.loginButton }}</grateful-button>
      @if (status() === 'loading') {
        <p>{{ copy.loginLoading }}</p>
      }
      @if (status() === 'error') {
        <p>{{ copy.loginFailed }}</p>
      }
    </form>
  `,
})
export class LoginFormComponent {
  readonly copy = COPY;
  readonly showHeading = input(true);
  readonly status = input<LoginFormStatus>('idle');
  readonly submitted = output<{ email: string; password: string }>();

  protected busy(): boolean {
    return this.status() === 'loading';
  }

  protected onSubmit(event: Event): void {
    event.preventDefault();
    if (this.busy()) {
      return;
    }
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    this.submitted.emit({
      email: String(data.get('email') ?? ''),
      password: String(data.get('password') ?? ''),
    });
  }
}
