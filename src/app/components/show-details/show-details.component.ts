import {Component, Input, OnInit} from '@angular/core';
import {Show} from "../../models/Show";

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  @Input()
  show: Show;

  constructor() { }

  ngOnInit() {
  }

}
