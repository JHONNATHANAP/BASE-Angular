import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyDocumentsRoutingModule } from './my-documents-routing.module';
import { MyDocumentsComponent } from './my-documents.component';
import { TemplateListModule } from '../../components/template-list/template-list.module';


@NgModule({
  declarations: [
    MyDocumentsComponent
  ],
  imports: [
    CommonModule,
    MyDocumentsRoutingModule,
    TemplateListModule
  ]
})
export class MyDocumentsModule { }
