import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

 
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    BrowserModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]

})
export class LoginModule { 
 
}
