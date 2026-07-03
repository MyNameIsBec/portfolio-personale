import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Curriculum } from './pages/curriculum/curriculum';
import { Projects } from './pages/projects/projects';
import { Skills } from './pages/skills/skills';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'curriculum', component: Curriculum },
  { path: 'progetti', component: Projects },
  { path: 'competenze', component: Skills },
  { path: 'contatti', component: Contact },
  { path: '**', redirectTo: '' },
];
