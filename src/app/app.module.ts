import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DataService} from './data.service';
import {HttpClientModule} from '@angular/common/http';
import { UserControlsComponent } from './components/user-controls/user-controls.component';
import { ModalComponent } from './modal/modal.component';
import { ShowsListComponent } from './components/shows-list/shows-list.component';
import {NumberOfEpisodesPipe} from './pipes/number-of-episodes.pipe';
import { ShowDetailsComponent } from './components/show-details/show-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageComponent } from './page/page.component';
import {AppRoutingModule} from './app-routing.module';
import { ShowsListPageComponent } from './shows-list-page/shows-list-page.component';
import { ShowsPageComponent } from './shows-page/shows-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UserControlsComponent,
    ShowsListComponent,
    NumberOfEpisodesPipe,
    ModalComponent,
    ShowDetailsComponent,
    PageNotFoundComponent,
    PageComponent,
    ShowsListPageComponent,
    ShowsPageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
