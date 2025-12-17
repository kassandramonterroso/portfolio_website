import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  
  selectedProject: any = null;

  projects: {[key: number] : any} = {
    1: {
      title: 'Real-Time Sentiment Tracker',
      description: 'Live social media sentiment analysis using VADER and BERT NLP, displayed with a Streamlit dashboard.',
      tech: ['Python', 'BERT', 'VADER', 'Pandas'],
      /* image: 'assets/project1_full.png */
    }
  };

  openProject(id: number){
    this.selectedProject = this.projects[id];
  }

  closeModal(){
    this.selectedProject = null;
  }

}
