import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {User} from "./models/User";
import {Show} from "./models/Show";
import {Episode} from "./models/Episode";

export interface ApiResponse<T> {
  status: number;
  data: T;
  message: string;
}

@Injectable()
export class DataService {

  apiBase = 'http://188.226.145.184/api';

  constructor (private http: HttpClient) { }

  getUsers (): Observable<ApiResponse<User[]>> {
    return this.http.get<ApiResponse<User[]>>(`${this.apiBase}/users`);
  }

  getShows (): Observable<ApiResponse<Show[]>> {
    return this.http.get<ApiResponse<Show[]>>(`${this.apiBase}/shows`);
  }

  getShow (slug: string): Observable<ApiResponse<Show>> {
    return this.http.get<ApiResponse<Show>>(`${this.apiBase}/shows/${slug}`);
  }

  addShow (show: Show): Observable<ApiResponse<Show>> {
    return this.http.post<ApiResponse<Show>>(`${this.apiBase}/shows`, show);
  }

  saveShow (show: Show): Observable<ApiResponse<Show>> {
    return this.http.put<ApiResponse<Show>>(`${this.apiBase}/shows/${show.slug}`, show);
  }

  addEpisode (showSlug: string, episode: Episode): Observable<ApiResponse<Episode>> {
    return this.http.post<ApiResponse<Episode>>(`${this.apiBase}/shows/${showSlug}/episodes`, episode);
  }
}
