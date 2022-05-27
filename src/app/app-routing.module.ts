import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from '@features/public/register/register.component';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('@features/public/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'login',
    loadChildren: () => import('@features/public/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
