import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ControlsModule, SpinnerModule } from '@app/shared';
import { TablesModule } from '@app/shared/tables';
import { FormGenericModule } from '../../components/form-filters/form-generic.module';
import { TableGenericModule } from '../../components/table-generic/table-generic.module';
import { ToDoMailboxRoutingModule } from './to-do-mailbox-routing.module';
import { ToDoMailboxComponent } from './to-do-mailbox.component';



@NgModule({
  declarations: [
    ToDoMailboxComponent
  ],
  imports: [
    CommonModule,
    ToDoMailboxRoutingModule,
   
    SpinnerModule,
    FormGenericModule,
    TableGenericModule
  ]
})
export class ToDoMailboxModule { }
