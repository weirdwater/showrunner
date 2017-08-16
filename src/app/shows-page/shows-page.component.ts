import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Show} from '../models/Show';

@Component({
  selector: 'app-shows-page',
  templateUrl: './shows-page.component.html',
  styleUrls: ['./shows-page.component.css']
})
export class ShowsPageComponent implements OnInit {

  show: Show;

  constructor(private api: DataService) { }

  ngOnInit() {
    this.api.getShow('unfilter-mp3').subscribe(
      res => this.show = res.data,
      console.error);
  }

}
