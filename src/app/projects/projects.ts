import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LucideAngularModule, Github} from 'lucide-angular';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

  readonly GitHub = Github;

  openIndex: number | null = null;

  toggleProject(i: number) {
  this.openIndex = this.openIndex === i ? null : i;
  }

  getLangClass(key: string | number | symbol): string {
    return String(key).toLowerCase();
  }  
  
  selectedProject: any = null;

  projects: {[key: number] : any} = {
    1: {
      title: 'Smart Runplanner (In progress)',
      languages:{JavaScript:65.3, CSS:28.9, HTML:5.8},
      description: 'Designing a smart training planner that generates personalized running schedules based on availability, pace goals, and recovery constraints. Currently building the backend data model and REST APIs to support dynamic scheduling logic, with plans to incorporate analytics-driven progression and performance tracking.',
      tech: ['Java', 'React', 'Spring Boot', 'REST APIs', 'JPA / Hibernate', 'H2'],
      github: "https://github.com/kassandramonterroso/Smart_Runplanner"
    },
    2: {
      title: 'Interactive Developer Portfolio',
      languages:{TypeScript:38.7, HTML:34.0, CSS:27.3},
      description: 'Designed and built a performant Angular single-page portfolio featuring sequential hero typography animations, scroll-driven UI state, and modular standalone components. Focused on clean architecture, accessibility, and polished user experience.',
      tech: ['Angular', 'TypeScript', 'HTML', 'CSS', 'IntersectionObserver', 'Responsive Design'],
      github: "https://github.com/kassandramonterroso/portfolio_website"
    },
    3: {
      title: 'Website Data Analysis',
      languages:{Python:100},
      description: 'Conducted user funnel analysis using Pandas to understand how users progress from visiting the website to adding items to cart, checking out, and completing purchases.',
      tech: ['Python', 'Pandas'],
      github:"https://github.com/kassandramonterroso/Website_Data_Analysis",
    },
    4: {
      title: 'Linear Regression Model',
      languages:{Python:100},
      description: 'Built a gradient descent algorithm to minimize error between predicted and actual values by computing gradients for model parameters and tuning step size for stable convergence.',
      tech: ['Python', 'Matplotlib'],
      github:"https://github.com/kassandramonterroso/Linear_Regression_Algorithm",
    },
    5: {
      title: 'Healthcare ML Model',
      languages:{Python:100},
      description: 'Using sklearn to create a k nearest neighbor classifier trained to predict whether a patient has breast cancer. Includes a plot of classifier accuracies with k values from 1-100 to find the most accurate k value.',
      tech: ['Python', 'Sklearn', 'Matplotlib'],
      github:"https://github.com/kassandramonterroso/Breast_Cancer_Classifier",
    }
  };

}
