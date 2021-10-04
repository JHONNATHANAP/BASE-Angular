import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator.component';
import { ButtonsModule } from '@app/shared/buttons';



@NgModule({
  declarations: [
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule
  ],
  exports:[
    PaginatorComponent,
    
  ]
})
export class PaginatorModule { }
