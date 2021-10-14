import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ControlsModule } from '@app/shared';
import { TablesModule } from '@app/shared/tables';
import { TableGenericComponent } from './table-generic.component';



@NgModule({
  declarations: [TableGenericComponent],
  imports: [
    CommonModule,
    TablesModule,
    ControlsModule
  ],
  exports:[TableGenericComponent]
})
export class TableGenericModule { }
