import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent} from './student.component';

import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import {MessagesComponent} from './messages/messages.component';
import {NotificationComponent}from './notification/notification.component';
import {TimetableComponent} from './../timetable/timetable.component';
import {AttendanceComponent} from './../attendance/attendance.component';
const routes: Routes = [
  {
    path:'student', component: StudentComponent, 
    children:[
      {path:'',component:HomeComponent},
      {path:'profile',component:ProfileComponent},
      {path:'home',component:HomeComponent},
      {path:'messages',component:MessagesComponent},
      {path:'notification',component:NotificationComponent},
      {path:'timetable',component:TimetableComponent},
      {path:'attendance',component:AttendanceComponent}
    ]

  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),

  ],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
