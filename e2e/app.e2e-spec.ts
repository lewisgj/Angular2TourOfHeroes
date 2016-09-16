import { AngularBudgetPainterPage } from './app.po';

describe('angular-budget-painter App', function() {
  let page: AngularBudgetPainterPage;

  beforeEach(() => {
    page = new AngularBudgetPainterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
