import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TimetableComponent} from './timetable.component'; 
const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimetableRoutingModule { }
