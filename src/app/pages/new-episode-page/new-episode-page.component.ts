import { Component, OnInit } from '@angular/core';
import {Episode} from '../../models/Episode';
import {Router, ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap'
import {DataService} from '../../data.service';
import {Show} from '../../models/Show';

@Component({
  selector: 'app-new-episode-page',
  templateUrl: './new-episode-page.component.html',
  styleUrls: ['./new-episode-page.component.css']
})
export class NewEpisodePageComponent implements OnInit {

  newEpisodeSubmit = this.newEpisode.bind(this);
  show: Show;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: DataService) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap(params => this.api.getShow(params.get('slug')))
      .subscribe(res => this.show = res.data, console.error);
  }

  newEpisode (episode: Episode): void {
    this.api.addEpisode(this.show.slug, episode)
      .subscribe(res => {
        if (res.status === 201) {
          this.router.navigate(['/shows', this.show.slug],
            {replaceUrl: true});
        }
      }, console.error);
  }
}
