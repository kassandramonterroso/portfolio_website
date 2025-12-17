import {
  Component,
  ElementRef,
  AfterViewInit,
  ViewChild
} from '@angular/core';
import { AppComponent } from '../app';
import { About } from '../about/about';
import { Contact } from '../contact/contact';
import { Projects } from '../projects/projects';
import { Skills } from '../skills/skills';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    About,
    Skills,
    Contact,
    Projects
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('hero') hero!: ElementRef;

  name='KASSANDRA';
  letters = this.name.split('');

  constructor(private app: AppComponent) {}

  ngAfterViewInit(){
    const observer = new IntersectionObserver(
      ([entry]) => {
        this.app.showFooterName = !entry.isIntersecting;
      },
      {
        threshold: 0.1
      }
    );
    observer.observe(this.hero.nativeElement);
  }
}

