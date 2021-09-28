import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routesPath } from '@app/const';
import { DemoComponent } from './demo.component';

/* import { AuthGuard } from '@app/guards'; */

const routes: Routes = [
    {
      path: '',
      component: DemoComponent,
      children: [
        {
          path: routesPath.demo.shared,
          loadChildren: () => import('./pages/shared/shared.module').then(m=>m.SharedModule)
        },
        {
          path:  routesPath.demo.controls,
          loadChildren: () => import('./pages/controls/controls.module').then(m=>m.ControlsModule)
        },
     
       /*  {
          path: 'guards',
          loadChildren: () => import('./pages/guards/guards.module').then(m=>m.GuardsModule),
         // canLoad: [AuthGuard]
        } */
      ]
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
