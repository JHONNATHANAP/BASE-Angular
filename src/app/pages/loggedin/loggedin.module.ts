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
import { MyDataModule } from './pages/my-data/my-data.module';
import { RecentlyVisitedModule } from './pages/recently-visited/recently-visited.module';
import { NewDetailModule } from './pages/new-detail/new-detail.module';
import { DetailRequestModule } from './pages/detail-request/detail-request.module';

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
    DetailRequestModule,
    MyDataModule,
    RecentlyVisitedModule,
    NewDetailModule,
    DetailRequirementModule,
  ]
})
export class LoggedinModule { }
