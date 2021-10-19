import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsSearchRoutingModule } from './documents-search-routing.module';
import { DocumentsSearchComponent } from './documents-search.component';
import { TemplateListModule } from '../../components/template-list/template-list.module';


@NgModule({
  declarations: [
    DocumentsSearchComponent
  ],
  imports: [
    CommonModule,
    DocumentsSearchRoutingModule,
    TemplateListModule
  ]
})
export class DocumentsSearchModule { }
