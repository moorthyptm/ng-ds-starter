import { Component, signal, inject, Renderer2, afterNextRender } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PtmButtonDirective } from '@ptm/components/button';
import { LucideSun, LucideMoon, LucideSettings } from '@lucide/angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PtmButtonDirective, LucideSun, LucideMoon, LucideSettings],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly isDarkMode = signal(false);
  private readonly document = inject(DOCUMENT);
  private readonly renderer = inject(Renderer2);

  constructor() {
    afterNextRender(() => {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        this.isDarkMode.set(true);
        this.renderer.addClass(this.document.documentElement, 'dark');
      }
    });
  }

  toggleDarkMode() {
    this.isDarkMode.update((v) => !v);

    if (this.isDarkMode()) {
      this.renderer.addClass(this.document.documentElement, 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      this.renderer.removeClass(this.document.documentElement, 'dark');
      localStorage.setItem('theme', 'light');
    }
  }
}
