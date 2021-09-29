import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { HeaderComponent } from '@app/components/header/header.component';
import { MenuListComponent } from '@app/components/menu-list/menu-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ButtonModule } from '@app/shared';


@NgModule({
  declarations: [
    DemoComponent,
    HeaderComponent,
    MenuListComponent,

  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ButtonModule,
  ]
})
export class DemoModule { }
