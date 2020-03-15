import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as axios from 'axios';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

class Http {}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent
  ],
  entryComponents: [
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [ {provide: Http, useValue: axios} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
