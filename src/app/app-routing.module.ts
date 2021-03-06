import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home-component', pathMatch: 'full' },
  { path: 'home-component', component: HomeComponent },
  { path: 'login-component', component: LoginComponent },
  { path: 'signup-component', component: SignupComponent },
  { path: 'about-us-component', component: AboutUsComponent },
  { path: 'contact-us-component', component: ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
