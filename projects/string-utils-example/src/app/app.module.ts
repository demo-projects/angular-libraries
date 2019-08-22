import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StringUtilsModule, StringUtilsService} from 'string-utils';
import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StringUtilsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
