import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGenericComponent } from './form-generic.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormFieldModule, MaterialInputModule, ButtonModule, SpinnerModule, ControlsModule } from '@app/shared';
import { TablesModule } from '@app/shared/tables';



@NgModule({
  declarations: [FormGenericComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
    FormFieldModule,
    MaterialInputModule,
    ButtonModule,
    SpinnerModule,
    ControlsModule,
    TablesModule,
  ],
  exports:[
    FormGenericComponent
  ]
})
export class FormGenericModule { }
