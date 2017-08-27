import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {TimetableModule} from './../../timetable/timetable.module';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    TimetableModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
