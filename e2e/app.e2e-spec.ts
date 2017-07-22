import { Ng4RecipesAppPage } from './app.po';

describe('ng4-recipes-app App', () => {
  let page: Ng4RecipesAppPage;

  beforeEach(() => {
    page = new Ng4RecipesAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
