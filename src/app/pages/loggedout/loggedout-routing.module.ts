import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routesPath } from '@app/const';
import { LoggedoutComponent } from './loggedout.component';

const routes: Routes = [
  {
    path: '',
    component: LoggedoutComponent,
    children: [
      {
        path: routesPath.loggedout.login,
        loadChildren: () => import('./pages/login/login.module').then(m=>m.LoginModule)
      }  
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedoutRoutingModule { }
