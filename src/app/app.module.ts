import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FileHelpersModule } from 'ngx-file-helpers';

import { AppComponent } from './app.component';
import { FilebrowserComponent } from './filebrowser/filebrowser.component';

@NgModule({
  declarations: [
    AppComponent,
    FilebrowserComponent
  ],
  imports: [
    BrowserModule,
    FileHelpersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
