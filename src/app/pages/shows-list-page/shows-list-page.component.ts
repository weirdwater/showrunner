import { Component, OnInit } from '@angular/core';
import {Show} from '../../models/Show';
import {DataService} from '../../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shows-list-page',
  templateUrl: './shows-list-page.component.html',
  styleUrls: ['./shows-list-page.component.css']
})
export class ShowsListPageComponent implements OnInit {

  shows: Show[];

  constructor(
    private router: Router,
    private api: DataService) { }

  ngOnInit() {
    this.api.getShows().subscribe(
      res => this.shows = res.data,
      console.error);
  }

  displayShow (show: Show) {
    console.log('displayShow', show.slug)
    this.router.navigate(['/shows', show.slug]);
  }

}
