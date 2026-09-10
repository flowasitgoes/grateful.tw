import { Component, input, output } from '@angular/core';
import {
  ENTRY_SECTION_KEYS,
  ENTRY_SECTION_LABELS,
  type EntrySectionKey,
  type EntrySections,
} from '@app/contracts';
import { COPY } from './copy';
import { ButtonComponent } from './button.component';

export type TodayFormStatus = 'loading' | 'ready' | 'read-error' | 'saving' | 'saved' | 'save-error';

@Component({
  selector: 'grateful-today-form',
  imports: [ButtonComponent],
  template: `
    <section>
      @if (showHeading()) {
        <h1>{{ copy.todayTitle }}</h1>
      }
      @if (status() === 'loading') {
        <p>{{ copy.reading }}</p>
      } @else if (status() === 'read-error') {
        <p>{{ copy.readFailed }}</p>
      } @else {
        @for (key of keys; track key) {
          <label>
            {{ labels[key] }}
            <span>{{ copy.sectionHint }}</span>
            <textarea
              [name]="key"
              [value]="sections()[key]"
              [disabled]="status() === 'saving'"
              (input)="onInput(key, $event)"
            ></textarea>
          </label>
        }
        <grateful-button type="button" [disabled]="status() === 'saving'" (pressed)="save.emit()">
          {{ copy.save }}
        </grateful-button>
        @if (showLogout()) {
          <grateful-button type="button" [disabled]="status() === 'saving'" (pressed)="logout.emit()">
            {{ copy.logout }}
          </grateful-button>
        }
        @if (status() === 'saving') {
          <p>{{ copy.saving }}</p>
        }
        @if (status() === 'save-error') {
          <p>{{ copy.saveFailed }}</p>
        }
        @if (status() === 'saved') {
          <p>{{ copy.saved }}</p>
        }
      }
    </section>
  `,
})
export class TodayFormComponent {
  readonly copy = COPY;
  readonly showHeading = input(true);
  readonly showLogout = input(false);
  readonly keys = ENTRY_SECTION_KEYS;
  readonly labels = ENTRY_SECTION_LABELS;
  readonly status = input<TodayFormStatus>('loading');
  readonly sections = input.required<EntrySections>();
  readonly sectionsChange = output<EntrySections>();
  readonly save = output<void>();
  readonly logout = output<void>();

  protected onInput(key: EntrySectionKey, event: Event): void {
    const value = (event.target as HTMLTextAreaElement).value;
    this.sectionsChange.emit({ ...this.sections(), [key]: value });
  }
}
