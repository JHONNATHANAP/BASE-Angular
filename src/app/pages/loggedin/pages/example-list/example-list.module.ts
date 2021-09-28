import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleListRoutingModule } from './example-list-routing.module';
import { ExampleListComponent } from './example-list.component';


@NgModule({
  declarations: [
    ExampleListComponent
  ],
  imports: [
    CommonModule,
    ExampleListRoutingModule
  ]
})
export class ExampleListModule { }
