import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PtmButtonDirective } from '@ptm/components/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PtmButtonDirective],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('docs');
}
