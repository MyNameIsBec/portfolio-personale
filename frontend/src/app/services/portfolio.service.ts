import { Injectable, inject } from '@angular/core';
import { Profile, Project, SkillGroup } from '../models/portfolio';
import { TranslationService } from './translation.service';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private readonly apiUrl = environment.apiUrl;
  private readonly translation = inject(TranslationService);

  private get langParam(): string {
    return `?lang=${this.translation.language()}`;
  }

  private async fetchJson<T>(url: string): Promise<T> {
    const res = await fetch(url);
    if (!res.ok) {
      const body = await res.text();
      throw new Error(`API ${res.status}: ${body.slice(0, 200)}`);
    }
    return res.json();
  }

  async getProfile(): Promise<Profile> {
    return this.fetchJson<Profile>(`${this.apiUrl}/profile${this.langParam}`);
  }

  async getProjects(): Promise<Project[]> {
    return this.fetchJson<Project[]>(`${this.apiUrl}/projects${this.langParam}`);
  }

  async getProject(id: number): Promise<Project> {
    return this.fetchJson<Project>(`${this.apiUrl}/projects/${id}${this.langParam}`);
  }

  async getSkills(): Promise<SkillGroup> {
    return this.fetchJson<SkillGroup>(`${this.apiUrl}/skills${this.langParam}`);
  }
}
