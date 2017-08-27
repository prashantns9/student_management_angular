import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';

import { ProfileModule} from './profile/profile.module';
import { HomeModule } from './home/home.module';
import {AttendanceModule} from './../attendance/attendance.module';
import {TimetableModule} from './../timetable/timetable.module';
import {MessagesModule} from './messages/messages.module';
import {NotificationModule} from './notification/notification.module';


@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule,

    ProfileModule,
    HomeModule,
    MessagesModule,
    NotificationModule,
    AttendanceModule,
    TimetableModule
  ],
  declarations: [StudentComponent],
  exports:[StudentComponent]
})
export class StudentModule { }
