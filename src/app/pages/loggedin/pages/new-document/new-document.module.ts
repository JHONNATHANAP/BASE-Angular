import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NewDocumentRoutingModule } from './new-document-routing.module';
import { NewDocumentComponent } from './new-document.component';
import { TemplateFormModule } from '@app/pages/loggedin/components/template-form/template-form.module';


@NgModule({
  declarations: [
    NewDocumentComponent
  ],
  imports: [
    CommonModule,
    NewDocumentRoutingModule,
    TemplateFormModule
  ]
})
export class NewDocumentModule { }
