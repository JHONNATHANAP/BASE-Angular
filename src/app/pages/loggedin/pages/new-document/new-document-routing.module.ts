import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewDocumentComponent } from './new-document.component';

const routes: Routes = [
  {
    path: '',
    component: NewDocumentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewDocumentRoutingModule { }
