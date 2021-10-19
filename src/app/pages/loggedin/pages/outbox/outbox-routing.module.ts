import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutboxComponent } from './outbox.component';

const routes: Routes = [
  {
    path: '',
    component: OutboxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutboxRoutingModule { }
