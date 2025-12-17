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
  @ViewChild('hero', {static: true}) hero!: ElementRef;
  @ViewChild('scroll', {static: true}) scroll!: ElementRef;

  name='KASSANDRA';
  letters = this.name.split('');

  constructor(private app: AppComponent) {}

  ngAfterViewInit(){
    const observer = new IntersectionObserver(
      ([entry]) => {
        this.app.showFooterName = !entry.isIntersecting;
        
        if (!entry.isIntersecting){
          this.scroll.nativeElement.classList.remove('visible');
        }
      },
      {
        threshold: 0.1
      }
    );
    observer.observe(this.hero.nativeElement);

    setTimeout(() => {
      this.scroll.nativeElement.classList.add('visible');
    }, 2000);
  }
}

