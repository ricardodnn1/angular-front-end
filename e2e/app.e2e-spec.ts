import { TestDevFrontendPage } from './app.po';

describe('test-dev-frontend App', () => {
  let page: TestDevFrontendPage;

  beforeEach(() => {
    page = new TestDevFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
