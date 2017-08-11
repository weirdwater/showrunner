import { ShowrunnerPage } from './app.po';

describe('showrunner App', () => {
  let page: ShowrunnerPage;

  beforeEach(() => {
    page = new ShowrunnerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
