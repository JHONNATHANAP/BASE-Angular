import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentsWithResponseTimeComponent } from './documents-with-response-time.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentsWithResponseTimeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsWithResponseTimeRoutingModule { }
