import { Injectable, signal } from '@angular/core';
import { it } from '../translations/it';
import { en } from '../translations/en';
import type { Translations } from '../translations/types';

export type Language = 'it' | 'en';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  readonly language = signal<Language>(this.loadLanguage());
  private readonly translations: Record<Language, Translations> = { it, en };

  private loadLanguage(): Language {
    try {
      const stored = localStorage.getItem('lang');
      if (stored === 'it' || stored === 'en') return stored;
    } catch { /* storage non disponibile */ }
    return 'it';
  }

  toggle() {
    const next: Language = this.language() === 'it' ? 'en' : 'it';
    this.language.set(next);
    try {
      localStorage.setItem('lang', next);
    } catch { /* storage non disponibile */ }
  }

  t(key: string): string {
    const dict = this.translations[this.language()] as unknown as Record<string, unknown>;
    const parts = key.split('.');
    let result: unknown = dict;
    for (const part of parts) {
      if (result == null || typeof result !== 'object') return key;
      result = (result as Record<string, unknown>)[part];
    }
    return typeof result === 'string' ? result : key;
  }
}
