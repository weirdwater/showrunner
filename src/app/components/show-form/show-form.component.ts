import {Component, Input, OnInit} from '@angular/core';
import { Show } from '../../models/Show';

@Component({
  selector: 'app-show-form',
  templateUrl: './show-form.component.html',
  styleUrls: ['./show-form.component.css']
})
export class ShowFormComponent {

  categories = [
    'Arts',
    'Business',
    'Comedy',
    'Education',
    'Games & Hobbies',
    'Government & Organisations',
    'Health',
    'Kids & Family',
    'Music',
    'News & Politics',
    'Religion & Spirituality',
    'Science & Culture',
    'Sports & Recreation',
    'Technology',
    'TV & Film'
  ];

  languages: [{code: string, name: string}] = [
    {code: 'nl', name: 'Dutch'},
    {code: 'en', name: 'English'}
  ];

  @Input()
  model = new Show();

  @Input()
  onSubmit: (show: Show) => void;

  constructor() {
    this.model.episodes = this.model.episodes || [];
    this.model.art = 'art.png';
    this.model.language = 'en';
    this.model.category = 'Arts';
  }

}
