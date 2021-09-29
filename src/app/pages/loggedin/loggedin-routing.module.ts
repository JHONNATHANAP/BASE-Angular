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
        loadChildren: () => import('./pages/example-list/example-list.module').then(m=>m.ExampleListModule)
      },
      {
        path: routesPath.loggedin.exampleForm,
        loadChildren: () => import('./pages/example-form/example-form.module').then(m=>m.ExampleFormModule)
      },
      {
        path: routesPath.loggedin.userProfiles,
        loadChildren: () => import('./pages/user-profiles/user-profiles.module').then(m=>m.UserProfilesModule)
      }  

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedinRoutingModule { }
