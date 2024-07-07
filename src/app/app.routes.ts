import { Routes } from '@angular/router';
import { HomeComponet } from './pages/home/home.component';
import { LoadingComponent } from './pages/loading/loading-component';
import { SkillComponent } from './pages/skill/skill.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectComponent } from './pages/project/project.component';
import { ResumeComponent } from './pages/resume/resume.component';

export const routes: Routes = [
  {
    path: '',
    component: LoadingComponent,
  },
  {
    path: 'home',
    component: HomeComponet,
  },
  {
    path: 'skill',
    component: SkillComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'project',
    component: ProjectComponent,
  },
  {
    path: 'resume',
    component: ResumeComponent,
  },
  {
    path: '**',
    redirectTo: (info) => {
      console.error('Entered wrong url path');
      return '';
    },
  },
];
