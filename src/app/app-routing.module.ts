import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {ShowsPageComponent} from './pages/shows-page/shows-page.component';
import {NewShowPageComponent} from './pages/new-show-page/new-show-page.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'shows', pathMatch: 'full'},
  {path: 'shows/new', component: NewShowPageComponent},
  {path: 'shows/:slug', component: ShowsPageComponent},
  {path: 'shows', component: ShowsPageComponent},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
