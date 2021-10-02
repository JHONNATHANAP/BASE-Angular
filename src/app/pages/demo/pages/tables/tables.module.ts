import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TablesModule } from '@app/shared/tables';
import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';



@NgModule({
  declarations: [
    TablesComponent
  ],
  imports: [
    CommonModule,
    TablesRoutingModule,
    TablesModule
  ]
})
export class TablasModule { }
