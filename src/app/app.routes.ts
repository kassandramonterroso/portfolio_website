import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';
import { Skills } from './skills/skills';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'projects', component: Projects},
    {path: 'contact', component: Contact},
    {path: 'skills', component: Skills}
];
