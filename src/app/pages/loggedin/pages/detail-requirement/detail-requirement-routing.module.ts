import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailRequirementComponent } from './detail-requirement.component';

const routes: Routes = [
  {
    path: '',
    component: DetailRequirementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailRequirementRoutingModule { }
