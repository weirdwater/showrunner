import { Component, OnInit } from '@angular/core';
import {Show} from "../../models/Show";

@Component({
  selector: 'app-new-show-page',
  templateUrl: './new-show-page.component.html',
  styleUrls: ['./new-show-page.component.css']
})
export class NewShowPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  newShowSubmit (newShow: Show) {
    console.log(newShow);
  }

}
