import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest';
import {
  assertFails,
  assertSucceeds,
  initializeTestEnvironment,
  type RulesTestEnvironment,
} from '@firebase/rules-unit-testing';
import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore';
import { emptyEntrySections } from '../../shared/contracts/entry';

const ENTRY_PATH = 'users/alice/entries/2026-09-10';

function validEntry(
  overrides: Record<string, unknown> = {},
): Record<string, unknown> {
  return {
    ...emptyEntrySections(),
    addressing: '冠均，我看見你。',
    updatedAt: Timestamp.now(),
    ...overrides,
  };
}

describe('firestore rules', () => {
  let testEnv: RulesTestEnvironment;

  beforeAll(async () => {
    testEnv = await initializeTestEnvironment({
      projectId: 'grateful-tw',
      firestore: {
        rules: readFileSync(resolve('firestore.rules'), 'utf8'),
        host: '127.0.0.1',
        port: 8080,
      },
    });
  });

  afterAll(async () => {
    await testEnv?.cleanup();
  });

  afterEach(async () => {
    await testEnv.clearFirestore();
  });

  it('rejects unauthenticated read and write', async () => {
    const db = testEnv.unauthenticatedContext().firestore();
    await assertFails(getDoc(doc(db, ENTRY_PATH)));
    await assertFails(setDoc(doc(db, ENTRY_PATH), validEntry()));
  });

  it('rejects a different uid', async () => {
    const db = testEnv.authenticatedContext('bob').firestore();
    await assertFails(getDoc(doc(db, ENTRY_PATH)));
    await assertFails(setDoc(doc(db, ENTRY_PATH), validEntry()));
  });

  it('allows the owner to write nine strings and updatedAt', async () => {
    const db = testEnv.authenticatedContext('alice').firestore();
    await assertSucceeds(setDoc(doc(db, ENTRY_PATH), validEntry()));
    const snapshot = await getDoc(doc(db, ENTRY_PATH));
    expect(snapshot.exists()).toBe(true);
    expect(snapshot.data()?.addressing).toBe('冠均，我看見你。');
  });

  it('rejects extra fields', async () => {
    const db = testEnv.authenticatedContext('alice').firestore();
    await assertFails(setDoc(doc(db, ENTRY_PATH), validEntry({ extra: 'nope' })));
  });

  it('rejects a non YYYY-MM-DD id', async () => {
    const db = testEnv.authenticatedContext('alice').firestore();
    await assertFails(setDoc(doc(db, 'users/alice/entries/today'), validEntry()));
  });

  it('rejects non-string section values', async () => {
    const db = testEnv.authenticatedContext('alice').firestore();
    await assertFails(setDoc(doc(db, ENTRY_PATH), validEntry({ gratitude: 1 })));
  });
});
