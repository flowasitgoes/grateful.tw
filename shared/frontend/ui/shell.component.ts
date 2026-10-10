import { Component, input, OnDestroy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COPY, INSTAGRAM_HREF } from './copy';

@Component({
  selector: 'grateful-shell',
  imports: [RouterLink],
  template: `
    <header class="shell-header">
      @if (back()) {
        <a class="shell-back" routerLink="/" aria-label="返回">
          <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
            <path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z" />
          </svg>
        </a>
      } @else {
        <span class="shell-brand">grateful.tw</span>
      }
      <button
        class="shell-menu"
        type="button"
        [attr.aria-label]="menuOpen() ? copy.menuClose : copy.menu"
        [attr.aria-expanded]="menuOpen()"
        (click)="toggleMenu()"
      >
        @if (menuOpen()) {
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path
              fill="currentColor"
              d="M18.3 5.71 12 12.01 5.7 5.7 4.29 7.11 10.59 13.4 4.29 19.7 5.7 21.11 12 14.82 18.29 21.11 19.7 19.7 13.41 13.4 19.71 7.11z"
            />
          </svg>
        } @else {
          <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
            <path fill="currentColor" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
          </svg>
        }
      </button>
    </header>
    <div
      class="shell-backdrop"
      [class.is-open]="menuOpen()"
      (click)="closeMenu()"
    ></div>
    <aside
      class="shell-drawer"
      [class.is-open]="menuOpen()"
      [inert]="!menuOpen()"
      [attr.aria-hidden]="!menuOpen()"
    >
      <ul class="shell-menu-list">
        <li>
          <a
            class="shell-instagram"
            [href]="instagramHref"
            target="_blank"
            rel="noopener noreferrer"
            [attr.aria-label]="copy.instagram"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
              <path
                fill="currentColor"
                d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm10.5 1.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
              />
            </svg>
            <span>{{ copy.instagram }}</span>
          </a>
        </li>
      </ul>
    </aside>
    <ng-content />
  `,
})
export class ShellComponent implements OnDestroy {
  readonly back = input(false);
  readonly copy = COPY;
  readonly instagramHref = INSTAGRAM_HREF;
  readonly menuOpen = signal(false);

  toggleMenu(): void {
    if (this.menuOpen()) {
      this.closeMenu();
      return;
    }
    this.menuOpen.set(true);
    document.body.classList.add('shell-menu-open');
  }

  closeMenu(): void {
    this.menuOpen.set(false);
    document.body.classList.remove('shell-menu-open');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('shell-menu-open');
  }
}
