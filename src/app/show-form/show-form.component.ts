import { Component, OnInit } from '@angular/core';

import { Episode } from '../models/Episode';
import { Show } from '../models/Show';

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

  model = new Show(
    null,
    'Connected blijven',
    'connected-blijven',
    [{number: 1, title: 'Hello London'}],
    'Technology',
    'art.png',
    'Je moet connected blijven weetje',
    '(c) 2017',
    'https://example.com/',
    'nl-NL',
    'Michiel de Ruijter'
  );

  submitted = false;

  onSubmit () {
    this.submitted = true;
  }

  get diagnostic () {
    return JSON.stringify(this.model);
  }

}
