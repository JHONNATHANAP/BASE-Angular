import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoMailboxComponent } from './to-do-mailbox.component';

const routes: Routes = [
  {
    path: '',
    component: ToDoMailboxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToDoMailboxRoutingModule { }
