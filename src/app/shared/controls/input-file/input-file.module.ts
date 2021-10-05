import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFileComponent } from './input-file.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { PopupsModule } from '@app/shared/popups/popups.module';



@NgModule({
  declarations: [
    InputFileComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    PopupsModule
  ],
  exports:[
    InputFileComponent
  ]
})
export class InputFileModule { }
