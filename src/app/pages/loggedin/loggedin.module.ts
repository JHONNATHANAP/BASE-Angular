import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from '@app/pages/loggedin/components/header/header.component';
import { MenuListComponent } from '@app/pages/loggedin/components/menu-list/menu-list.component';
import { ButtonModule } from '@app/shared';
import { StoreModule } from '@ngrx/store';
import { LoggedinRoutingModule } from './loggedin-routing.module';
import { LoggedinComponent } from './loggedin.component';
import { DetailRequestModule } from './pages/detail-request/detail-request.module';
import { DetailRequirementModule } from './pages/detail-requirement/detail-requirement.module';
import { DocumentsSearchModule } from './pages/documents-search/documents-search.module';
import { DocumentsWithResponseTimeModule } from './pages/documents-with-response-time/documents-with-response-time.module';
import { InboxModule } from './pages/inbox/inbox.module';
import { MyDataModule } from './pages/my-data/my-data.module';
import { MyDocumentsModule } from './pages/my-documents/my-documents.module';
import { MySharesModule } from './pages/my-shares/my-shares.module';
import { NewDetailModule } from './pages/new-detail/new-detail.module';
import { NewDocumentModule } from './pages/new-document/new-document.module';
import { NewRequirementModule } from './pages/new-requirement/new-requirement.module';
import { OutboxModule } from './pages/outbox/outbox.module';
import { RecentlyVisitedModule } from './pages/recently-visited/recently-visited.module';
import { ToDoMailboxModule } from './pages/to-do-mailbox/to-do-mailbox.module';
import { UserProfilesModule } from './pages/user-profiles/user-profiles.module';
import { reducers } from './store';


@NgModule({
  declarations: [
    LoggedinComponent,
    HeaderComponent,
    MenuListComponent,
    
    
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
    DocumentsSearchModule,
    DocumentsWithResponseTimeModule,
    InboxModule,
    MyDocumentsModule,
    MySharesModule,
    OutboxModule
  ]
})
export class LoggedinModule { }
