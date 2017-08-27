import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { ProfileModule} from './profile/profile.module';
import { HomeModule } from './home/home.module';
import {AttendanceModule} from './../attendance/attendance.module';
import {TimetableModule} from './../timetable/timetable.module';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
     ProfileModule,
    HomeModule,

    AttendanceModule,
    TimetableModule
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
