import { Routes } from '@angular/router';
import { TodayPage } from './features/today/today.page';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'today' },
  { path: 'today', component: TodayPage },
  { path: '**', redirectTo: 'today' },
];
