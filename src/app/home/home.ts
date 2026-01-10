import { Component, OnInit } from '@angular/core';
import { About } from '../about/about';
import { Contact } from '../contact/contact';
import { Projects } from '../projects/projects';
import { Skills } from '../skills/skills';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [About, Skills, Contact, Projects],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent implements OnInit {
  stage: 'none' | 'hi' | 'name' = 'none';

  ngOnInit() {
    setTimeout(() => {
      this.stage = 'hi';
    }, 100);

    setTimeout(() => {
      this.stage = 'name';
    }, 1500);

  }

}


