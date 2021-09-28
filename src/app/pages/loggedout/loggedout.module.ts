import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedoutRoutingModule } from './loggedout-routing.module';
import { LoggedoutComponent } from './loggedout.component';


@NgModule({
  declarations: [
    LoggedoutComponent
  ],
  imports: [
    CommonModule,
    LoggedoutRoutingModule
  ]
})
export class LoggedoutModule { }
