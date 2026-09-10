import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { findJournal, type Journal } from '@app/contracts';
import { FirstJournalComponent, ShellComponent } from '@app/frontend/ui';

@Component({
  selector: 'app-journal-page',
  imports: [ShellComponent, FirstJournalComponent],
  template: `
    <grateful-shell [back]="true">
      @if (journal(); as item) {
        <grateful-first-journal [createdAt]="item.createdAt" />
      }
    </grateful-shell>
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
