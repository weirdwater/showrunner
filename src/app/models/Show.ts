import {Episode} from './Episode';

export interface Show {
  _id: string;
  title: string;
  slug: string;
  episodes: Episode[];
  category: string;
  art: string;
  description: string;
  copyright: string;
  link: string;
  language: string;
  author: string;
}
