import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{PageNotFoundComponent} from './page-not-found/page-not-found.component';

export const routes: Routes = [

    { path:'login', loadChildren: 'app/login/login.module#LoginModule' },
    { path:'register', loadChildren:'app/register/register.module#RegisterModule'},
    { path:'student', loadChildren:'./student/student.module#StudentModule'},
    { path:'teacher', loadChildren:'./teacher/teacher.module#TeacherModule'},
    { path:'parent', loadChildren:'./parent/parent.module#ParentModule'},
    { path:'admin', loadChildren:'./admin/admin.module#AdminModule'},


    { path: '**', component:PageNotFoundComponent}
    


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}


