import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialInputComponent } from './material-input.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    MaterialInputComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ],
  exports: [
    MaterialInputComponent
  ]
})
export class MaterialInputModule { }
