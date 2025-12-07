import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './app.routes'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  template: `
    

    <router-outlet></router-outlet>
  `
})
export class App {
  protected readonly title = signal('Portfolio');
}
