import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent} from './admin.component';

import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

import {TimetableComponent} from './../timetable/timetable.component';
import {AttendanceComponent} from './../attendance/attendance.component';
const routes: Routes = [
  {
    path:'admin', component: AdminComponent, 
    children:[
      {path:'',component:HomeComponent},
      {path:'profile',component:ProfileComponent},

    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
