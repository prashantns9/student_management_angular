import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register.component';

const regRoutes: Routes = [
      { path: 'register',  component: RegisterComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(regRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RegisterRoutingModule { }
