import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DataService} from './data.service';
import {HttpClientModule} from '@angular/common/http';
import { UserControlsComponent } from './user-controls/user-controls.component';
import { ModalComponent } from './modal/modal.component';
import { ShowsListComponent } from './shows-list/shows-list.component';
import {NumberOfEpisodesPipe} from './pipes/number-of-episodes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserControlsComponent,
    ShowsListComponent,
    NumberOfEpisodesPipe,
    ModalComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
