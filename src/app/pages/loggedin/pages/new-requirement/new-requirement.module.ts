import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NewRequirementRoutingModule } from './new-requirement-routing.module';
import { NewRequirementComponent } from './new-requirement.component';
import { TemplateFormModule } from '@app/pages/loggedin/components/template-form/template-form.module';



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
