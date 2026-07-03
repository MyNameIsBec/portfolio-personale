import { Component, inject, signal, effect } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { TranslationService } from '../../services/translation.service';
import { Project } from '../../models/portfolio';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  private readonly portfolio = inject(PortfolioService);
  readonly tr = inject(TranslationService);
  readonly projects = signal<Project[]>([]);
  readonly loading = signal(true);
  readonly error = signal(false);

  constructor() {
    effect(() => {
      this.tr.language();
      this.loading.set(true);
      this.error.set(false);
      this.portfolio.getProjects()
        .then((p) => this.projects.set(p))
        .catch(() => this.error.set(true))
        .finally(() => this.loading.set(false));
    });
  }
}
