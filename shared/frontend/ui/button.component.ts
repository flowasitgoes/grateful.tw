import { Component, input, output } from '@angular/core';

@Component({
  selector: 'grateful-button',
  template: `
    <button [type]="type()" [disabled]="disabled()" (click)="pressed.emit()">
      <ng-content />
    </button>
  `,
})
export class ButtonComponent {
  readonly type = input<'button' | 'submit'>('button');
  readonly disabled = input(false);
  readonly pressed = output<void>();
}
