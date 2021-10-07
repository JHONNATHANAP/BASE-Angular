import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRequestRoutingModule } from './detail-request-routing.module';
import { DetailRequestComponent } from './detail-request.component';


@NgModule({
  declarations: [
    DetailRequestComponent
  ],
  imports: [
    CommonModule,
    DetailRequestRoutingModule
  ]
})
export class DetailRequestModule { }
