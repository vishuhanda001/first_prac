import { FirstPracPage } from './app.po';

describe('first-prac App', function() {
  let page: FirstPracPage;

  beforeEach(() => {
    page = new FirstPracPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
