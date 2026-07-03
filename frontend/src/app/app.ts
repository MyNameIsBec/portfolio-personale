import { Component, inject, effect } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private readonly tr = inject(TranslationService);
  private readonly doc = inject(DOCUMENT);

  constructor() {
    effect(() => {
      this.doc.documentElement.lang = this.tr.language();
    });
  }
}
