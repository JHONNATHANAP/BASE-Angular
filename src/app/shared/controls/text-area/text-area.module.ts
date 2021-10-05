import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextAreaComponent } from './text-area.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {TextFieldModule} from '@angular/cdk/text-field';


@NgModule({
  declarations: [
    TextAreaComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    TextFieldModule
  ],
  exports:[
    TextAreaComponent
  ]
})
export class TextAreaModule { }
