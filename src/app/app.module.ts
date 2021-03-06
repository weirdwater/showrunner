import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { UserControlsComponent } from './components/user-controls/user-controls.component';
import { ModalComponent } from './components/modal/modal.component';
import { ShowsListComponent } from './components/shows-list/shows-list.component';
import { NumberOfEpisodesPipe} from './pipes/number-of-episodes.pipe';
import { ShowDetailsComponent } from './components/show-details/show-details.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageComponent } from './pages/page/page.component';
import { AppRoutingModule } from './app-routing.module';
import { ShowsListPageComponent } from './pages/shows-list-page/shows-list-page.component';
import { ShowsPageComponent } from './pages/shows-page/shows-page.component';
import { ShowFormComponent } from './components/show-form/show-form.component';
import { NewShowPageComponent } from './pages/new-show-page/new-show-page.component';
import { EditShowPageComponent } from './pages/edit-show-page/edit-show-page.component';
import { EpisodeFormComponent } from './components/episode-form/episode-form.component';
import { NewEpisodePageComponent } from './pages/new-episode-page/new-episode-page.component';
import { AudioUrlPipePipe } from './pipes/audio-url-pipe.pipe';
import { DatetimeStringPipePipe } from './pipes/datetime-string-pipe.pipe';

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
    ShowsPageComponent,
    ShowFormComponent,
    NewShowPageComponent,
    EditShowPageComponent,
    EpisodeFormComponent,
    NewEpisodePageComponent,
    AudioUrlPipePipe,
    DatetimeStringPipePipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
