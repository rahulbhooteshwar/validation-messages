import { ValidationMessagesDemoPage } from './app.po';

describe('validation-messages-demo App', () => {
  let page: ValidationMessagesDemoPage;

  beforeEach(() => {
    page = new ValidationMessagesDemoPage ();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
