import {Episode} from './Episode';

export interface Show {
  _id: string;
  title: string;
  episodes: Episode[];
}
