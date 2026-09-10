import { Injectable } from '@angular/core';
import { type EntrySections } from '@app/contracts';
import { localEntryKey, parseStoredEntry, serializeStoredEntry } from './local-entry';

@Injectable({ providedIn: 'root' })
export class EntryService {
  getToday(): EntrySections {
    return parseStoredEntry(localStorage.getItem(localEntryKey()));
  }

  saveToday(sections: EntrySections): void {
    localStorage.setItem(localEntryKey(), serializeStoredEntry(sections));
  }
}
