import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedinRoutingModule } from './loggedin-routing.module';
import { LoggedinComponent } from './loggedin.component';
import { HeaderComponent } from '@app/pages/loggedin/components/header/header.component';
import { MenuListComponent } from '@app/pages/loggedin/components/menu-list/menu-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ButtonModule } from '@app/shared';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    LoggedinComponent,
    HeaderComponent,
    MenuListComponent
  ],
  imports: [
    CommonModule,
    LoggedinRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ButtonModule,
  ]
})
export class LoggedinModule { }
