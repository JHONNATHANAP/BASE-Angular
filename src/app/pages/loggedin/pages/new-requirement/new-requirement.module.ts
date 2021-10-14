import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRequirementRoutingModule } from './new-requirement-routing.module';
import { NewRequirementComponent } from './new-requirement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormFieldModule, ButtonModule, SpinnerModule, ControlsModule } from '@app/shared';
import { FormGenericModule } from '../../components/form-filters/form-generic.module';
import { TemplateFormModule } from '../../components/template-form/template-form.module';


@NgModule({
  declarations: [
    NewRequirementComponent
  ],
  imports: [
    CommonModule,
    NewRequirementRoutingModule,
    TemplateFormModule
  ]
})
export class NewRequirementModule { }
