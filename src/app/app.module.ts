import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DataService} from './data.service';
import {HttpClientModule} from '@angular/common/http';
import { UserControlsComponent } from './user-controls/user-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    UserControlsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
