import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TemplateListModule } from '@app/pages/loggedin/components/template-list/template-list.module';
import { ToDoMailboxRoutingModule } from './to-do-mailbox-routing.module';
import { ToDoMailboxComponent } from './to-do-mailbox.component';



@NgModule({
  declarations: [
    ToDoMailboxComponent
  ],
  imports: [
    CommonModule,
    ToDoMailboxRoutingModule,
   
    TemplateListModule
  ]
})
export class ToDoMailboxModule { }
