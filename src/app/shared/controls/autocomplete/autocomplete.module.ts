import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from './autocomplete.component';
import {HighlightPipe} from './pipes/highlight.pipe';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AutocompleteComponent,
    HighlightPipe
  ],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports: [
    AutocompleteComponent
  ]
})
export class AutocompleteModule { }
