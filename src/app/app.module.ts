import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LayoutModule} from "@angular/cdk/layout";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {HttpsRequestInterceptor} from "./core/interceptors/http-request.interceptor";
import {LoaderInterceptor} from "./core/interceptors/loader.interceptor";
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    LayoutModule,
    MatSnackBarModule,
    CoreModule

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpsRequestInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true},
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
