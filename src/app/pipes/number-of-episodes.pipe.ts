import {Pipe, PipeTransform} from '@angular/core';
import {Episode} from '../models/Episode';

@Pipe({name: 'numberOfEpisodes'})
export class NumberOfEpisodesPipe implements PipeTransform {
  transform (episodes: Episode[]) {
    const number = episodes.length;

    return number === 1 ? `${number} episode` : `${number} episodes`;
  }
}
