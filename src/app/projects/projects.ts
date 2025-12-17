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
      title: 'Interactive Developer Portfolio',
      description: 'Designed and built a performant Angular single-page portfolio featuring sequential hero typography animations, scroll-driven UI state, and modular standalone components. Focused on clean architecture, accessibility, and polished user experience.',
      tech: ['Angular', 'TypeScript', 'HTML', 'CSS', 'IntersectionObserver', 'Responsive Design'],
      github: "https://github.com/kassandramonterroso/portfolio_website"
    },
    3: {
      title: 'Website Data Analysis',
      description: 'Processing and visualizing large datasets, uncovering patterns that inform design and engagment strategies.',
      tech: ['Python', 'Pandas'],
      github:"https://github.com/kassandramonterroso/Website_Data_Analysis",
    },
    4: {
      title: 'Linear Regression Model',
      description: 'Tuned features to achieve accurate predictive insights.',
      tech: ['Python', 'Matplotlib'],
      github:"https://github.com/kassandramonterroso/Linear_Regression_Algorithm",
    },
    2: {
      title: 'Healthcare ML Model',
      description: 'KNN breast cancer classifier and diabetes diagnosis analysis; applied ML to generate actionable insights.',
      tech: ['Python', 'Sklearn', 'Matplotlib'],
      github:"https://github.com/kassandramonterroso/Breast_Cancer_Classifier",
    }
  };

  openProject(project: any){
    this.selectedProject = project;
  }

  closeProject(){
    this.selectedProject = null;
  }

}
