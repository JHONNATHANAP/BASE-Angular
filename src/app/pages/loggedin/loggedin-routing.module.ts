import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routesPath } from '@app/const';
import { LoggedinComponent } from './loggedin.component';

const routes: Routes = [
  {
    path: '',
    component: LoggedinComponent,
    children: [
      {
        path: routesPath.loggedin.exampleList,
        loadChildren: () => import('./pages/example-list/example-list.module').then(m => m.ExampleListModule)
      },
      {
        path: routesPath.loggedin.exampleForm,
        loadChildren: () => import('./pages/example-form/example-form.module').then(m => m.ExampleFormModule)
      },
      {
        path: routesPath.loggedin.userProfiles,
        loadChildren: () => import('./pages/user-profiles/user-profiles.module').then(m => m.UserProfilesModule)
      },
      {
        path: routesPath.loggedin.toDoMailbox,
        loadChildren: () => import('./pages/to-do-mailbox/to-do-mailbox-routing.module').then(m => m.ToDoMailboxRoutingModule)
      },
      {
        path: routesPath.loggedin.newDocument,
        loadChildren: () => import('./pages/new-document/new-document-routing.module').then(m => m.NewDocumentRoutingModule)
      },
      {
        path: routesPath.loggedin.newRequirement,
        loadChildren: () => import('./pages/new-requirement/new-requirement-routing.module').then(m => m.NewRequirementRoutingModule)
      },
      {
        path: routesPath.loggedin.detailRequest,
        loadChildren: () => import('./pages/detail-request/detail-request-routing.module').then(m => m.DetailRequestRoutingModule)
      },    
      {
        path: routesPath.loggedin.myData,
        loadChildren: () => import('./pages/my-data/my-data-routing.module').then(m => m.MyDataRoutingModule)
      },
      {
        path: routesPath.loggedin.recentlyVisited,
        loadChildren: () => import('./pages/recently-visited/recently-visited-routing.module').then(m => m.RecentlyVisitedRoutingModule)
      },
      {
        path: routesPath.loggedin.newDetail,
        loadChildren: () => import('./pages/new-detail/new-detail-routing.module').then(m => m.NewDetailRoutingModule)
      },
      {
        path: routesPath.loggedin.detailRequirement,
        loadChildren: () => import('./pages/detail-requirement/detail-requirement-routing.module').then(m => m.DetailRequirementRoutingModule)
      },
      {
        path: routesPath.loggedin.documentssearch,
        loadChildren: () => import('./pages/documents-search/documents-search-routing.module').then(m => m.DocumentsSearchRoutingModule)
      },
      {
        path: routesPath.loggedin.documentswithresponsetime,
        loadChildren: () => import('./pages/documents-with-response-time/documents-with-response-time-routing.module').then(m => m.DocumentsWithResponseTimeRoutingModule)
      },
      {
        path: routesPath.loggedin.inbox,
        loadChildren: () => import('./pages/inbox/inbox-routing.module').then(m => m.InboxRoutingModule)
      },
      {
        path: routesPath.loggedin.mydocuments,
        loadChildren: () => import('./pages/my-documents/my-documents-routing.module').then(m => m.MyDocumentsRoutingModule)
      },
      {
        path: routesPath.loggedin.myshares,
        loadChildren: () => import('./pages/my-shares/my-shares-routing.module').then(m => m.MySharesRoutingModule)
      },
      {
        path: routesPath.loggedin.outbox,
        loadChildren: () => import('./pages/outbox/outbox-routing.module').then(m => m.OutboxRoutingModule)
      },

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedinRoutingModule { }
