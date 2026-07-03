import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly tr = inject(TranslationService);

  readonly navItems: Array<{ path: string; key: string; exact?: boolean }> = [
    { path: '/', key: 'nav.home', exact: true },
    { path: '/curriculum', key: 'nav.curriculum' },
    { path: '/progetti', key: 'nav.projects' },
    { path: '/competenze', key: 'nav.skills' },
    { path: '/contatti', key: 'nav.contact' },
  ];
}
