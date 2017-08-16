import {Component, Input, OnInit} from '@angular/core';
import {Show} from '../../models/Show';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.css']
})
export class ShowsListComponent implements OnInit {

  @Input()
  shows: Show[];

  @Input()
  onSelect: (show: Show) => void;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  newShow () {
    this.router.navigate(['/shows/new']);
  }

}
