import { Component, inject, signal, computed, effect } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { TranslationService } from '../../services/translation.service';
import { SkillGroup } from '../../models/portfolio';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  private readonly portfolio = inject(PortfolioService);
  readonly tr = inject(TranslationService);
  readonly skillGroups = signal<SkillGroup>({});
  readonly loading = signal(true);
  readonly error = signal(false);

  readonly categories = computed(() => Object.keys(this.skillGroups()));

  constructor() {
    effect(() => {
      this.tr.language();
      this.loading.set(true);
      this.error.set(false);
      this.portfolio.getSkills()
        .then((groups) => this.skillGroups.set(groups))
        .catch(() => this.error.set(true))
        .finally(() => this.loading.set(false));
    });
  }
}
