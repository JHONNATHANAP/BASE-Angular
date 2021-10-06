import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewDetailRoutingModule } from './new-detail-routing.module';
import { NewDetailComponent } from './new-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormFieldModule, ButtonModule, SpinnerModule, ControlsModule } from '@app/shared';


@NgModule({
  declarations: [
    NewDetailComponent
  ],
  imports: [
    CommonModule,
    NewDetailRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormFieldModule,
    ButtonModule,
    SpinnerModule,
    ControlsModule,
  ]
})
export class NewDetailModule { }
