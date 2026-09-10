import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { findJournal, type Journal } from '@app/contracts';
import { PageMeta } from '@app/frontend/data-access';
import { FirstJournalComponent, ShellComponent } from '@app/frontend/ui';

@Component({
  selector: 'app-journal-page',
  imports: [ShellComponent, FirstJournalComponent],
  template: `
    <grateful-shell [back]="true">
      @if (journal(); as item) {
        <grateful-first-journal [journalId]="item.id" [createdAt]="item.createdAt" />
      }
    </grateful-shell>
  `,
})
export class JournalPage implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly pageMeta = inject(PageMeta);
  private readonly destroyRef = inject(DestroyRef);
  readonly journal = signal<Journal | undefined>(undefined);

  ngOnInit(): void {
    this.route.paramMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
      const id = params.get('id') ?? '';
      const found = findJournal(id);
      if (!found) {
        void this.router.navigateByUrl('/');
        return;
      }
      this.journal.set(found);
      this.pageMeta.setJournal(found);
    });
  }
}
