import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {GoogleSignInComponent} from 'angular-google-signin';
import { AppComponent } from './app.component';

import { AppRoutingModule, routingComponents } from './app.routes';

import {sharedService} from './Services/app.service';

@NgModule({
  declarations: [
    AppComponent,
    GoogleSignInComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [sharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
