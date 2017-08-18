import { Pipe, PipeTransform } from '@angular/core';
import {Episode} from '../models/Episode';

@Pipe({
  name: 'audioUrl'
})
export class AudioUrlPipePipe implements PipeTransform {

  transform(episode: Episode): any {
    return `/assets/audio/${episode.audio}`;
  }

}
