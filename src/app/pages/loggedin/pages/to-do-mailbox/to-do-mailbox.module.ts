import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoMailboxRoutingModule } from './to-do-mailbox-routing.module';
import { ToDoMailboxComponent } from './to-do-mailbox.component';
import { ButtonModule, ControlsModule, FormFieldModule, MaterialInputModule, SpinnerModule } from '@app/shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablesModule } from '@app/shared/tables';


@NgModule({
  declarations: [
    ToDoMailboxComponent
  ],
  imports: [
    CommonModule,
    ToDoMailboxRoutingModule,

    FormsModule,
    ReactiveFormsModule,
    
    FormFieldModule,
    MaterialInputModule,
    ButtonModule,
    SpinnerModule,
    ControlsModule,
    TablesModule
  ]
})
export class ToDoMailboxModule { }
