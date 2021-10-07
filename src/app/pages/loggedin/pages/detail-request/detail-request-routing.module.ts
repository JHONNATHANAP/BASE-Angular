import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailRequestComponent } from './detail-request.component';

const routes: Routes = [
  {
    path: '',
    component: DetailRequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailRequestRoutingModule { }
