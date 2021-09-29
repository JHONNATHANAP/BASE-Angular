import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedoutRoutingModule } from './loggedout-routing.module';
import { LoggedoutComponent } from './loggedout.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    LoggedoutComponent
  ],
  imports: [
    CommonModule,
    LoggedoutRoutingModule,
    MatIconModule
  ]
})
export class LoggedoutModule { }
