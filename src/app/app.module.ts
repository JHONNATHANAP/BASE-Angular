import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '@src/environments/environment';
import { HeaderComponent } from './components/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatNativeDateModule, MatDateFormats, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';



import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
const StoreDevtools = !environment.production ? StoreDevtoolsModule.instrument({maxAge: 50}) : [];
import {reducers, effects} from './store';
import {NotificationModule} from './services';
import {MatIconModule} from '@angular/material/icon';
import {ButtonModule} from '@app/shared/buttons';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import {MatListModule} from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import {AngularFireModule  } from '@angular/fire/compat';
const APP_DATE_FORMATS: MatDateFormats = {
    parse: {
      dateInput: { day: 'numeric', month: 'numeric', year: 'numeric'},
    },
    display: {
       dateInput: {day: 'numeric', month: 'short', year: 'numeric'},
       monthYearLabel: {year: 'numeric', month: 'short'},
       dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
       monthYearA11yLabel: {year: 'numeric', month: 'long'}
    }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true
      }
    }),
    EffectsModule.forRoot(effects),
    StoreDevtools,
    NotificationModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
