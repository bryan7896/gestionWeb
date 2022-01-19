import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const screensRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '*',
    redirectTo: 'home'
  },
];
