import { Component, OnInit } from '@angular/core';
import {Show} from '../models/Show';
import {DataService} from '../data.service';

@Component({
  selector: 'app-shows-list-page',
  templateUrl: './shows-list-page.component.html',
  styleUrls: ['./shows-list-page.component.css']
})
export class ShowsListPageComponent implements OnInit {

  shows: Show[];

  constructor(private api: DataService) { }

  ngOnInit() {
    this.api.getShows().subscribe(
      res => this.shows = res.data,
      console.error);
  }

}
