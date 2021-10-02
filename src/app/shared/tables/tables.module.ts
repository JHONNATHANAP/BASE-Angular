import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from './table/table.module';
import { PaginatorModule } from './paginator/paginator.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    PaginatorModule
  ],
  exports:[
    TableModule,
    PaginatorModule
  ]
})
export class TablesModule { }
