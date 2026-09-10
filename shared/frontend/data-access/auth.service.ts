import { Injectable, signal } from '@angular/core';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, type User } from 'firebase/auth';
import { getFirebaseAuth } from '@app/frontend/firebase';

@Injectable({ providedIn: 'root' })
export class AuthService {
  readonly user = signal<User | null>(null);

  constructor() {
    onAuthStateChanged(getFirebaseAuth(), (user) => {
      this.user.set(user);
    });
  }

  uid(): string | null {
    return getFirebaseAuth().currentUser?.uid ?? this.user()?.uid ?? null;
  }

  async signIn(email: string, password: string): Promise<void> {
    await signInWithEmailAndPassword(getFirebaseAuth(), email, password);
  }

  async signOut(): Promise<void> {
    await signOut(getFirebaseAuth());
  }
}
