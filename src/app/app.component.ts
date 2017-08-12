import {Component, OnInit} from '@angular/core';
import {DataService} from './data.service';
import {Show} from './models/Show';
import {User} from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  users: User[];
  shows: Show[];

  constructor (private api: DataService) {}

  ngOnInit(): void {
    this.api.getShows().subscribe(
      res => {
        if (res.status === 200) {
          this.shows = res.data;
        } else {
          console.error(`Get Shows: ${res.status} - ${res.message}`);
        }
      }, err => {
        console.error(err);
      });

    this.api.getUsers().subscribe(
      res => {
        if (res.status === 200) {
          this.users = res.data;
        } else {
          console.error(`Get Users: ${res.status} - ${res.message}`);
        }
      }, err => {
        console.error(err);
      });
  }
}
