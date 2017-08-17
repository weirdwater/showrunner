import { Component, OnInit } from '@angular/core';
import {Show} from '../../models/Show';
import {DataService} from '../../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-show-page',
  templateUrl: './new-show-page.component.html',
  styleUrls: ['./new-show-page.component.css']
})
export class NewShowPageComponent implements OnInit {

  newShowSubmit = this.newShow.bind(this);

  constructor(
    private router: Router,
    private api: DataService) { }

  ngOnInit() {
  }

  newShow (newShow: Show): void {
    this.api.addShow(newShow).subscribe(res => {
      if (res.status === 201) {
        const show = res.data;
        this.router.navigate(['/shows', show.slug]);
      }
    }, console.error);
  }


}
