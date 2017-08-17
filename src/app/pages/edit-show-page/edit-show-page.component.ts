import { Component, OnInit } from '@angular/core';
import {Show} from '../../models/Show';
import {DataService} from '../../data.service';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-edit-show-page',
  templateUrl: './edit-show-page.component.html',
  styleUrls: ['./edit-show-page.component.css']
})
export class EditShowPageComponent implements OnInit {

  show: Show;
  changesSaved = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: DataService) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap(params => this.api.getShow(params.get('slug')))
      .subscribe(res => this.show = res.data, console.error);
  }

  saveShowSubmit (show: Show) {
    this.api.saveShow(show).subscribe(res => {
      if (res.status === 200) {
        this.changesSaved = true;
      }
    }, console.error);
  }

}
