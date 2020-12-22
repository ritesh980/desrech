import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home-component', pathMatch: 'full' },
  { path: 'home-component', component: HomeComponent },
  { path: 'login-component', component: LoginComponent },
  { path: 'signup-component', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
