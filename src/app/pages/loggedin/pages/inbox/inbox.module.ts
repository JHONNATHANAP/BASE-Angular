import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { InboxComponent } from './inbox.component';
import { TemplateListModule } from '../../components/template-list/template-list.module';


@NgModule({
  declarations: [
    InboxComponent
  ],
  imports: [
    CommonModule,
    InboxRoutingModule,
    TemplateListModule
  ]
})
export class InboxModule { }
