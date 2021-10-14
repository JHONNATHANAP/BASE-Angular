import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from './template-form.component';
import { FormGenericModule } from '../form-filters/form-generic.module';



@NgModule({
  declarations: [
    TemplateFormComponent
  ],
  imports: [
    CommonModule,
    FormGenericModule
  ],
  exports: [
    TemplateFormComponent
  ]
})
export class TemplateFormModule { }
