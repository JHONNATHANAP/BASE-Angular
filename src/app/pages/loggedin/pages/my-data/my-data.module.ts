import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyDataRoutingModule } from './my-data-routing.module';
import { MyDataComponent } from './my-data.component';
import { TablesModule } from '@app/shared/tables';


@NgModule({
  declarations: [
    MyDataComponent
  ],
  imports: [
    CommonModule,
    MyDataRoutingModule,
    TablesModule
  ]
})
export class MyDataModule { }
