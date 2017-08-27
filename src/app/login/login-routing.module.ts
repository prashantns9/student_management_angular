import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { LoginComponent } from './login.component';

const loginRoutes: Routes = [
    
    { path: '',  component: LoginComponent },

    { path: 'login',  component: LoginComponent }

];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],  
  exports: [
    RouterModule
  ]
})
export class LoginRoutingModule { }