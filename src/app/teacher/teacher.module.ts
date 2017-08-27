import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';

import { ProfileModule} from './profile/profile.module';
import { HomeModule } from './home/home.module';
import {MessagesModule} from './messages/messages.module';
import {NotificationModule} from './notification/notification.module';
import {AttendanceModule} from './../attendance/attendance.module';
import {TimetableModule} from './../timetable/timetable.module';


@NgModule({
  imports: [
    CommonModule,
    TeacherRoutingModule,
    ProfileModule,
    HomeModule,
    MessagesModule,
    NotificationModule,
    AttendanceModule,
    TimetableModule
  ],
  declarations: [TeacherComponent],
  exports:[TeacherComponent]
})
export class TeacherModule { }
