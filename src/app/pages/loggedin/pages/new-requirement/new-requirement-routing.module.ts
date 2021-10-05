import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewRequirementComponent } from './new-requirement.component';

const routes: Routes = [
  {
    path: '',
    component: NewRequirementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewRequirementRoutingModule { }
