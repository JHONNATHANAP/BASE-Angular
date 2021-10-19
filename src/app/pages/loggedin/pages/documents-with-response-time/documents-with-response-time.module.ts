import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsWithResponseTimeRoutingModule } from './documents-with-response-time-routing.module';
import { DocumentsWithResponseTimeComponent } from './documents-with-response-time.component';
import { TemplateListModule } from '../../components/template-list/template-list.module';


@NgModule({
  declarations: [
    DocumentsWithResponseTimeComponent
  ],
  imports: [
    CommonModule,
    DocumentsWithResponseTimeRoutingModule,
    TemplateListModule
  ]
})
export class DocumentsWithResponseTimeModule { }
