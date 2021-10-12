import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginMainComponent } from './pages/login/login-main/login-main.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'landing', loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
