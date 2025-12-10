import { Component, signal } from '@angular/core';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Skills } from './skills/skills';
import { Projects } from './projects/projects';

import { routes } from './app.routes'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Home,
    About,
    Contact,
    Skills,
    Projects
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
