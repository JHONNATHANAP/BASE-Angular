import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRequirementRoutingModule } from './detail-requirement-routing.module';
import { DetailRequirementComponent } from './detail-requirement.component';


@NgModule({
  declarations: [
    DetailRequirementComponent
  ],
  imports: [
    CommonModule,
    DetailRequirementRoutingModule
  ]
})
export class DetailRequirementModule { }
