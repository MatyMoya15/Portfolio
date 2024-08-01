import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectsComponent } from './components/projects/projects.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'header', component: HeaderComponent},
    {path: 'projects', component: ProjectsComponent}
];
