import {Episode} from './Episode';

export class Show {
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


  constructor(
    id: string,
    title: string,
    slug: string,
    episodes: Episode[],
    category: string,
    art: string,
    description: string,
    copyright: string,
    link: string,
    language: string,
    author: string) {
    this._id = id;
    this.title = title;
    this.slug = slug;
    this.episodes = episodes;
    this.category = category;
    this.art = art;
    this.description = description;
    this.copyright = copyright;
    this.link = link;
    this.language = language;
    this.author = author;
  }
}
