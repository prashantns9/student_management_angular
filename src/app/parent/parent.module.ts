import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentRoutingModule } from './parent-routing.module';
import { ParentComponent } from './parent.component';

@NgModule({
  imports: [
    CommonModule,
    ParentRoutingModule
  ],
  declarations: [ParentComponent]
})
export class ParentModule { }
