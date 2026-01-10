import { Component } from '@angular/core';
import { LucideAngularModule, Brain, Languages, GraduationCap, CodeXml} from 'lucide-angular';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  readonly Brain = Brain;
  readonly Languages = Languages;
  readonly GraduationCap = GraduationCap;
  readonly CodeXml = CodeXml;

}
