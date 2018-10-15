import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FileHelpersModule } from 'ngx-file-helpers';

import { AppComponent } from './app.component';
import { FilebrowserComponent } from './filebrowser/filebrowser.component';
import { PlayconsoleComponent } from './playconsole/playconsole.component';

@NgModule({
  declarations: [
    AppComponent,
    FilebrowserComponent,
    PlayconsoleComponent
  ],
  imports: [
    BrowserModule,
    FileHelpersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
