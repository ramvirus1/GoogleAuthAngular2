import { GoogleAuthAngular2SamplePage } from './app.po';

describe('google-auth-angular2-sample App', () => {
  let page: GoogleAuthAngular2SamplePage;

  beforeEach(() => {
    page = new GoogleAuthAngular2SamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
