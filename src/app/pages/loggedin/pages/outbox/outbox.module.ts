import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutboxRoutingModule } from './outbox-routing.module';
import { OutboxComponent } from './outbox.component';
import { TemplateListModule } from '../../components/template-list/template-list.module';


@NgModule({
  declarations: [
    OutboxComponent
  ],
  imports: [
    CommonModule,
    OutboxRoutingModule,
    TemplateListModule
  ]
})
export class OutboxModule { }
