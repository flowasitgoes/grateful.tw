import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';
import { findJournal, type Journal } from '@app/contracts';
import { FirstJournalComponent, ShellComponent } from '@app/frontend/ui';

@Component({
  selector: 'mobile-journal-page',
  imports: [IonContent, ShellComponent, FirstJournalComponent],
  template: `
    <ion-content [fullscreen]="true">
      <grateful-shell [back]="true">
        @if (journal(); as item) {
          <grateful-first-journal [createdAt]="item.createdAt" />
        }
      </grateful-shell>
    </ion-content>
  `,
})
export class JournalPage implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  readonly journal = signal<Journal | undefined>(undefined);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    const found = findJournal(id);
    if (!found) {
      void this.router.navigateByUrl('/');
      return;
    }
    this.journal.set(found);
  }
}
