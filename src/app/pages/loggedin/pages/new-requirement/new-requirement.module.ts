import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRequirementRoutingModule } from './new-requirement-routing.module';
import { NewRequirementComponent } from './new-requirement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormFieldModule, ButtonModule, SpinnerModule, ControlsModule } from '@app/shared';


@NgModule({
  declarations: [
    NewRequirementComponent
  ],
  imports: [
    CommonModule,
    NewRequirementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormFieldModule,
    ButtonModule,
    SpinnerModule,
    ControlsModule,
  ]
})
export class NewRequirementModule { }
