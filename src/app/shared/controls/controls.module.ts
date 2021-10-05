import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {InputModule} from './input/input.module';
import {FormFieldModule} from './form-field/form-field.module';
import {PasswordModule} from './password/password.module';
import { SelectModule } from './select/select.module';
import { CheckboxesModule } from './checkboxes/checkboxes.module';
import { RadiosModule } from './radios/radios.module';
import { DateModule } from './date/date.module';
import { DateRangeModule } from './date-range/date-range.module';
import { AutocompleteModule } from './autocomplete/autocomplete.module';
import { MaterialInputModule } from './material-input/material-input.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { TextAreaModule } from './text-area/text-area.module';
import { InputFileModule } from './input-file/input-file.module';
import { InputNumberModule } from './input-number/input-number.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputModule,
    FormFieldModule,
    PasswordModule,
    SelectModule,
    CheckboxesModule,
    RadiosModule,
    DateModule,
    DateRangeModule,
    AutocompleteModule,
    MaterialInputModule,
    CheckboxModule,
    TextAreaModule,
    InputFileModule,
    InputNumberModule
  ],
  exports: [
    InputModule,
    FormFieldModule,
    PasswordModule,
    SelectModule,
    CheckboxesModule,
    RadiosModule,
    DateModule,
    DateRangeModule,
    AutocompleteModule,
    MaterialInputModule,
    CheckboxModule,
    TextAreaModule,
    InputFileModule,
    InputNumberModule
  ]
})
export class ControlsModule { }
