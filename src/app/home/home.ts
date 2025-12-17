import {
  Component,
  ElementRef,
  HostListener,
  ViewChild
} from '@angular/core';
import { AppComponent } from '../app';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  @ViewChild('hero') hero!: ElementRef;

  name='KASSANDRA';
  letters = this.name.split('');

  constructor(private app: AppComponent) {}

  @HostListener('window:scroll')
  onScroll() {
    const heroBottom =
      this.hero.nativeElement.getBoundingClientRect().bottom;

    this.app.showFooterName = heroBottom <= 0;
  }
}

