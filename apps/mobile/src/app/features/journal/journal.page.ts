import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';
import { findJournal, type Journal } from '@app/contracts';
import { LocaleService, PageMeta } from '@app/frontend/data-access';
import { FirstJournalComponent, ShellComponent } from '@app/frontend/ui';

@Component({
  selector: 'mobile-journal-page',
  imports: [IonContent, ShellComponent, FirstJournalComponent],
  template: `
    <ion-content [fullscreen]="true">
      <grateful-shell [back]="true">
        @if (journal(); as item) {
          <grateful-first-journal [journalId]="item.id" [createdAt]="item.createdAt" />
        }
      </grateful-shell>
    </ion-content>
  `,
})
export class JournalPage implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly pageMeta = inject(PageMeta);
  private readonly localeService = inject(LocaleService);
  private readonly destroyRef = inject(DestroyRef);
  readonly journal = signal<Journal | undefined>(undefined);

  constructor() {
    effect(() => {
      const item = this.journal();
      this.localeService.locale();
      if (item) {
        this.pageMeta.setJournal(item);
      }
    });
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
      const id = params.get('id') ?? '';
      const found = findJournal(id);
      if (!found) {
        void this.router.navigateByUrl('/');
        return;
      }
      this.journal.set(found);
    });
  }
}
