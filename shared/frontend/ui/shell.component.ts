import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'grateful-shell',
  imports: [RouterLink],
  template: `
    <header class="shell-header">
      @if (back()) {
        <a class="shell-back" routerLink="/">返回</a>
      } @else {
        <span class="shell-brand">grateful.tw</span>
      }
      <button class="shell-menu" type="button" aria-label="選單">
        <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
          <path fill="currentColor" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
        </svg>
      </button>
    </header>
    <ng-content />
  `,
})
export class ShellComponent {
  readonly back = input(false);
}
