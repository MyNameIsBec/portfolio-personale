import { Component, inject, signal, effect } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { TranslationService } from '../../services/translation.service';
import { Profile } from '../../models/portfolio';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.html',
  styleUrl: './curriculum.scss',
})
export class Curriculum {
  private readonly portfolio = inject(PortfolioService);
  readonly tr = inject(TranslationService);
  readonly profile = signal<Profile | null>(null);
  readonly loading = signal(true);
  readonly error = signal(false);

  constructor() {
    effect(() => {
      this.tr.language();
      this.loading.set(true);
      this.error.set(false);
      this.portfolio.getProfile()
        .then((p) => this.profile.set(p))
        .catch(() => this.error.set(true))
        .finally(() => this.loading.set(false));
    });
  }

  formatDate(date: string | null): string {
    if (!date) return this.tr.t('curriculum.present');
    const d = new Date(date);
    const locale = this.tr.language() === 'it' ? 'it-IT' : 'en-US';
    return d.toLocaleDateString(locale, { month: 'long', year: 'numeric' });
  }
}
