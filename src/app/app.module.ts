import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module';

import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { ParentModule } from './parent/parent.module';
import { AdminModule } from './admin/admin.module';

import { AttendanceModule } from './attendance/attendance.module';
import { TimetableModule } from './timetable/timetable.module';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    LoginModule,
    RegisterModule,
    StudentModule,
    TeacherModule,
    ParentModule,
    AdminModule,
    AttendanceModule,
    TimetableModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AppComponent]
})
export class AppModule { }

