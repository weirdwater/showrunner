import { Component, OnInit } from '@angular/core';
import {Show} from '../../models/Show';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-new-show-page',
  templateUrl: './new-show-page.component.html',
  styleUrls: ['./new-show-page.component.css']
})
export class NewShowPageComponent implements OnInit {

  newShowSubmit = this.newShow.bind(this);

  constructor(private api: DataService) { }

  ngOnInit() {
  }

  newShow (newShow: Show) {
    console.log(newShow);
    this.api.addShow(newShow).subscribe(console.dir, console.error);
  }


}
