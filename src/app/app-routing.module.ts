import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {DashboardComponent} from './dashboard/dashboard.component'
import {UserHomeComponent} from './user-home/user-home.component'
import {ForgetPasswordComponent} from './forget-password/forget-password.component';
import {AuthGuardGuard} from './Guard/auth-guard.guard'
import {RoleGuard} from './role-guard/role.guard'

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'login', component:LoginComponent, canActivate:[RoleGuard]},
  {path:'user-home', canActivate:[AuthGuardGuard], component:UserHomeComponent},
  {path:'signup', component:SignupComponent, canActivate:[RoleGuard]},
  {path:'forget-password', component:ForgetPasswordComponent, canActivate:[RoleGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
