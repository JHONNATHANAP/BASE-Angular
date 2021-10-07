import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRequirementRoutingModule } from './detail-requirement-routing.module';
import { DetailRequirementComponent } from './detail-requirement.component';
import { ControlsModule, FormFieldModule } from '@app/shared/controls';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DetailRequirementComponent
  ],
  imports: [
    CommonModule,
    DetailRequirementRoutingModule,
    ControlsModule,
    FormsModule,
    ReactiveFormsModule,
    FormFieldModule,
  ]
})
export class DetailRequirementModule { }
