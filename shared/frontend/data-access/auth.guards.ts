import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { getFirebaseAuth } from '@app/frontend/firebase';

export const authGuard: CanActivateFn = async () => {
  const auth = getFirebaseAuth();
  await auth.authStateReady();
  if (auth.currentUser) {
    return true;
  }
  return inject(Router).createUrlTree(['/login']);
};

export const guestGuard: CanActivateFn = async () => {
  const auth = getFirebaseAuth();
  await auth.authStateReady();
  if (auth.currentUser) {
    return inject(Router).createUrlTree(['/today']);
  }
  return true;
};
