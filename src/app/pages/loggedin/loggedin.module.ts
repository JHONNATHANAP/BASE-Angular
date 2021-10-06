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
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { ToDoMailboxModule } from './pages/to-do-mailbox/to-do-mailbox.module';
import { UserProfilesModule } from './pages/user-profiles/user-profiles.module';
import { NewDocumentModule } from './pages/new-document/new-document.module';
import { NewRequirementModule } from './pages/new-requirement/new-requirement.module';
import { DetailRequirementModule } from './pages/detail-requirement/detail-requirement.module';

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
    StoreModule.forFeature('loggedin',reducers),

    ToDoMailboxModule,
    UserProfilesModule,
    NewDocumentModule,
    NewRequirementModule,
    DetailRequirementModule
  ]
})
export class LoggedinModule { }
