import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfilesRoutingModule } from './user-profiles-routing.module';
import { UserProfilesComponent } from './user-profiles.component';
import { ButtonModule } from '@app/shared';


@NgModule({
  declarations: [
    UserProfilesComponent
  ],
  imports: [
    CommonModule,
    UserProfilesRoutingModule,
    ButtonModule
  ]
})
export class UserProfilesModule { }
