import { MyTestingAngularPage } from './app.po';

describe('my-testing-angular App', function() {
  let page: MyTestingAngularPage;

  beforeEach(() => {
    page = new MyTestingAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
