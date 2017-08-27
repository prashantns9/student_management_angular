import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TimetableComponent} from './../../timetable/timetable.component';
import{HomeComponent} from './home.component';
const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
