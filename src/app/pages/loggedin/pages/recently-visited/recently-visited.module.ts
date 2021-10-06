import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecentlyVisitedRoutingModule } from './recently-visited-routing.module';
import { RecentlyVisitedComponent } from './recently-visited.component';
import { TablesModule } from '@app/shared/tables';


@NgModule({
  declarations: [
    RecentlyVisitedComponent
  ],
  imports: [
    CommonModule,
    RecentlyVisitedRoutingModule,
    TablesModule
  ]
})
export class RecentlyVisitedModule { }
