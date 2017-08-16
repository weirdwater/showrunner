import {Component, OnInit} from '@angular/core';
import {DataService} from './data.service';
import {Show} from './models/Show';
import {User} from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (private api: DataService) {}

}
