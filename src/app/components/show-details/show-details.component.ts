import {Component, Input, OnInit} from '@angular/core';
import {Show} from "../../models/Show";
import {Router} from "@angular/router";

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  @Input()
  show: Show;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  edit () {
    this.router.navigate(['/shows', this.show.slug, 'edit']);
  }

}
