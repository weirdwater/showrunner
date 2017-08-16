import {Episode} from './Episode';

export class Show {
  constructor (
    _id: string,
    title: string,
    slug: string,
    episodes: Episode[],
    category: string,
    art: string,
    description: string,
    copyright: string,
    link: string,
    language: string,
    author: string
  ) {}
}
