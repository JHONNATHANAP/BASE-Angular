import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MySharesComponent } from './my-shares.component';

const routes: Routes = [
  {
    path: '',
    component: MySharesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MySharesRoutingModule { }
