import { Component, inject, signal, effect } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { TranslationService } from '../../services/translation.service';
import { Profile } from '../../models/portfolio';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
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
}
