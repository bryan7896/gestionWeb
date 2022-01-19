import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authRoutes } from './modules/auth/auth.routing';
import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/no-auth.guard';
import { screensRoutes } from './modules/screens/screens.routing';

const routes: Routes = [
  {
    path: 'app',
    children: [
      ...screensRoutes
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    children: [
      ...authRoutes
    ],
    canActivate: [NoAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // initialNavigation: 'enabled',
    // preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
