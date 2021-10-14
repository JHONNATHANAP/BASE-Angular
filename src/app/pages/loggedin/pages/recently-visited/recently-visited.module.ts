import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableGenericModule } from '@app/pages/loggedin/components/table-generic/table-generic.module';
import { RecentlyVisitedRoutingModule } from './recently-visited-routing.module';
import { RecentlyVisitedComponent } from './recently-visited.component';


@NgModule({
  declarations: [
    RecentlyVisitedComponent
  ],
  imports: [
    CommonModule,
    RecentlyVisitedRoutingModule,
    TableGenericModule
  ]
})
export class RecentlyVisitedModule { }
