import {Component, Input, OnInit} from '@angular/core';
import {Episode} from '../../models/Episode';
import {Show} from '../../models/Show';

@Component({
  selector: 'app-episode-form',
  templateUrl: './episode-form.component.html',
  styleUrls: ['./episode-form.component.css']
})
export class EpisodeFormComponent {

  @Input()
  model = new Episode();

  @Input()
  onSubmit: (show: Show) => void;


}
