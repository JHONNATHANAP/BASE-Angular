import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpinnerModule } from '@app/shared';
import { FormGenericModule } from '../form-filters/form-generic.module';
import { TableGenericModule } from '../table-generic/table-generic.module';
import { TemplateListComponent } from './template-list.component';



@NgModule({
  declarations: [
    TemplateListComponent
  ],
  imports: [
    CommonModule,
    SpinnerModule,
    FormGenericModule,
    TableGenericModule    
  ],
  exports:[
    TemplateListComponent
  ]
})
export class TemplateListModule { }
