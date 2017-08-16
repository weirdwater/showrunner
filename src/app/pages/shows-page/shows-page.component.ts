import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {DataService} from '../../data.service';
import {Show} from '../../models/Show';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-shows-page',
  templateUrl: './shows-page.component.html',
  styleUrls: ['./shows-page.component.css']
})
export class ShowsPageComponent implements OnInit {

  show: Show;
  slug: string;
  noShow = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: DataService) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap(params => this.api.getShow(params.get('slug')))
      .subscribe(res => this.show = res.data, console.error);
  }

}
