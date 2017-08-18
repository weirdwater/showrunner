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

  apiBase = 'http://localhost:3000';

  constructor (private http: HttpClient) { }

  getUsers (): Observable<ApiResponse<User[]>> {
    return this.http.get<ApiResponse<User[]>>(`${this.apiBase}/api/users`);
  }

  getShows (): Observable<ApiResponse<Show[]>> {
    return this.http.get<ApiResponse<Show[]>>(`${this.apiBase}/api/shows`);
  }

  getShow (slug: string): Observable<ApiResponse<Show>> {
    return this.http.get<ApiResponse<Show>>(`${this.apiBase}/api/shows/${slug}`);
  }

  addShow (show: Show): Observable<ApiResponse<Show>> {
    return this.http.post<ApiResponse<Show>>(`${this.apiBase}/api/shows`, show);
  }

  saveShow (show: Show): Observable<ApiResponse<Show>> {
    return this.http.put<ApiResponse<Show>>(`${this.apiBase}/api/shows/${show.slug}`, show);
  }

  addEpisode (showSlug: string, episode: Episode): Observable<ApiResponse<Object>> {
    return this.http.post<ApiResponse<Object>>(`${this.apiBase}/api/shows/${showSlug}/episodes`, episode);
  }
}
