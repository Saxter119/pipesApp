import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

//locale app configuration

import localeEsDo from '@angular/common/locales/es-DO'
import localeFrCa from '@angular/common/locales/fr-CA'

import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsDo)
registerLocaleData(localeFrCa)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-DO'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
