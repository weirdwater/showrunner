import {Component, Input, OnInit} from '@angular/core';
import {Show} from "../../models/Show";
import {Router} from "@angular/router";
import {Episode} from "../../models/Episode";

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  @Input()
  show: Show;
  expandedEp: Episode;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  edit () {
    this.router.navigate(['/shows', this.show.slug, 'edit']);
  }

  rss () {
    window.location.pathname = `/rss/shows/${this.show.slug}`;
  }

  newEpisode () {
    this.router.navigate(['/shows', this.show.slug, 'episodes', 'new']);
  }

  toggleEpisode(episode: Episode) {
    if (this.expandedEp === episode) {
      this.expandedEp = null;
      return;
    }

    this.expandedEp = episode;
  }

}
