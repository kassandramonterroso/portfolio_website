import { Component, Host, HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {

  scrollY= 0;

  getOffset(i:number) {
    return Math.sin((this.scrollY/150) + i) * 20;
  }

  skills = [
    {
      category: 'Frontend',
      items: ['Angular', 'Typescript', 'HTML', 'CSS', 'React']
    },
    {
      category: 'Backend',
      items: ['Python', 'Java', 'SpringBoot', 'REST APIs']
    },
    {
      category: 'Databases',
      items: ['PostgreSQL', 'SQL']
    },
    {
      category: 'Cloud & DevOps',
      items: ['Docker', 'Git', 'CI/CD', 'AWS']
    }
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrollY = window.scrollY;
  }

}
