import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MySharesRoutingModule } from './my-shares-routing.module';
import { MySharesComponent } from './my-shares.component';
import { TemplateListModule } from '../../components/template-list/template-list.module';


@NgModule({
  declarations: [
    MySharesComponent
  ],
  imports: [
    CommonModule,
    MySharesRoutingModule,
    TemplateListModule
  ]
})
export class MySharesModule { }
