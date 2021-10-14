import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyDataRoutingModule } from './my-data-routing.module';
import { MyDataComponent } from './my-data.component';
import { TablesModule } from '@app/shared/tables';
import { TableGenericModule } from '@app/pages/loggedin/components/table-generic/table-generic.module';


@NgModule({
  declarations: [
    MyDataComponent
  ],
  imports: [
    CommonModule,
    MyDataRoutingModule,
    TablesModule,
    TableGenericModule
  ]
})
export class MyDataModule { }
