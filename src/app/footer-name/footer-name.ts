import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-name',
  standalone: true,
  imports: [],
  templateUrl: './footer-name.html',
  styleUrl: './footer-name.css',
})
export class FooterName {

  @Input() visible=false;

}
