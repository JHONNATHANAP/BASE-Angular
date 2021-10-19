import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentsSearchComponent } from './documents-search.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentsSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsSearchRoutingModule { }
