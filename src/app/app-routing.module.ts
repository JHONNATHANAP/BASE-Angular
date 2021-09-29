import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routesPath } from './const';



const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: routesPath.demo.path,
        loadChildren: () => import('./pages/demo/demo.module').then( m => m.DemoModule)
      },
      {
        path:  routesPath.static.path,
        loadChildren: () => import('./pages/static/static.module').then( m => m.StaticModule)
      },   
      {
        path:  routesPath.loggedin.path,
        loadChildren: () => import('./pages/loggedin/loggedin.module').then( m => m.LoggedinModule)
      },  
      {
        path:  routesPath.loggedout.path,
        loadChildren: () => import('./pages/loggedout/loggedout.module').then( m => m.LoggedoutModule)
      }, 
      {
        path: '',
        pathMatch: 'full',
        redirectTo:`${routesPath.loggedout.path}/${routesPath.loggedout.login}`
      },
    ]
  },

  {
    path: '**',
    pathMatch: 'full',
    redirectTo : 'static/404'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
