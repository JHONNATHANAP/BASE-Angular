import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewDocumentRoutingModule } from './new-document-routing.module';
import { NewDocumentComponent } from './new-document.component';
import { ButtonModule, SpinnerModule, ControlsModule, FormFieldModule } from '@app/shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NewDocumentComponent
  ],
  imports: [
    CommonModule,
    NewDocumentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormFieldModule,
    ButtonModule,
    SpinnerModule,
    ControlsModule,
  ]
})
export class NewDocumentModule { }
