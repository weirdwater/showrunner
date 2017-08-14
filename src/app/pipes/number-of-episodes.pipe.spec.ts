import {NumberOfEpisodesPipe} from './number-of-episodes.pipe';
import {Episode} from '../models/Episode';
import {beforeEach} from "selenium-webdriver/testing";

describe('numberOfEpisodesPipe', () => {
  let pipe: NumberOfEpisodesPipe;

  beforeEach(() => {
    pipe = new NumberOfEpisodesPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('returns "1 episode" for a single episode', () => {
    const episodes: Episode[] = [{ number: 1, title: 'The first episode'}];

    expect(pipe.transform(episodes)).toBe('1 episode');
  });

  it('returns "0 episodes" for zero episodes', () => {
    const episodes: Episode[] = [];

    expect(pipe.transform(episodes)).toBe('0 episodes');
  });

  it('returns "2 episodes" for two episodes', () => {
    const episodes: Episode[] = [
      { number: 1, title: 'The first episode'},
      { number: 2, title: 'The second episode'}];

    expect(pipe.transform(episodes)).toBe('2 episodes');
  });
});
