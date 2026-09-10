import { initializeApp, getApps, getApp, type FirebaseApp, type FirebaseOptions } from 'firebase/app';
import { getAuth, connectAuthEmulator, type Auth } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator, type Firestore } from 'firebase/firestore';
import { firebaseEnvironment } from './environment';

export interface FirebaseInitOptions {
  config: FirebaseOptions;
  useEmulators: boolean;
}

let app: FirebaseApp | undefined;
let auth: Auth | undefined;
let db: Firestore | undefined;
let emulatorsConnected = false;

export function initFirebase(options: FirebaseInitOptions = firebaseEnvironment): void {
  app = getApps().length > 0 ? getApp() : initializeApp(options.config);
  auth = getAuth(app);
  db = getFirestore(app);

  if (options.useEmulators && !emulatorsConnected) {
    connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
    connectFirestoreEmulator(db, '127.0.0.1', 8080);
    emulatorsConnected = true;
  }
}

export function getFirebaseAuth(): Auth {
  if (!auth) {
    throw new Error('Firebase Auth is not initialized');
  }
  return auth;
}

export function getFirebaseDb(): Firestore {
  if (!db) {
    throw new Error('Firestore is not initialized');
  }
  return db;
}
