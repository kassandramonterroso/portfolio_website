import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterName } from './footer-name/footer-name';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterName
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  showFooterName = false;
}
