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
      category: 'Frontend',
      items: ['Angular', 'Typescript', 'HTML', 'CSS', 'React']
    },
    {
      icon: Server,
      category: 'Backend',
      items: ['Python', 'Java', 'SpringBoot', 'REST APIs']
    },
    {
      icon: Database,
      category: 'Databases',
      items: ['PostgreSQL', 'SQL']
    },
    {
      icon: CodeXml,
      category: 'Cloud & DevOps',
      items: ['Docker', 'Git', 'CI/CD', 'AWS']
    }
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrollY = window.scrollY;
  }

}
