import { Routes } from '@angular/router';
import { HomePage } from './features/home/home.page';
import { JournalPage } from './features/journal/journal.page';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomePage },
  { path: 'journals/:id', component: JournalPage },
  { path: 'today', redirectTo: 'journals/affirmation-1', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];
