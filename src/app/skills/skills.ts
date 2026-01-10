import { Component, Host, HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule,Database,PanelsTopLeft,CodeXml,Server } from 'lucide-angular';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {

  readonly Database = Database;
  readonly PanelsTopLeft = PanelsTopLeft;
  readonly CodeXml = CodeXml;
  readonly Server = Server;

  scrollY= 0;

  getOffset(i:number) {
    return Math.sin((this.scrollY/150) + i) * 20;
  }

  skills = [
    {
      icon: PanelsTopLeft,
      category: 'Frontend Development',
      items: ['Angular', 'Typescript','JavaScript', 'HTML', 'CSS', 'React', 'Figma(UI/UX)']
    },
    {
      icon: Server,
      category: 'Backend Development',
      items: ['Python', 'Java', 'SpringBoot', 'REST APIs']
    },
    {
      icon: Database,
      category: 'Databases & Storage',
      items: ['H2','PostgreSQL', 'SQL']
    },
    {
      icon: CodeXml,
      category: 'Cloud & DevOps',
      items: ['Docker', 'Git', 'CI/CD', 'AWS','Firebase']
    }
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrollY = window.scrollY;
  }

}
