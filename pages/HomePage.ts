import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly headerLogo: Locator;
  readonly navigationMenu: Locator;
  readonly heroSection: Locator;
  readonly productsButton: Locator;
  readonly aboutUsSection: Locator;
  // Remove this line
  // readonly popularProductsSection: Locator;
  readonly newsletterSection: Locator;
  readonly footerSection: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headerLogo = page.locator('span.fusion-imageframe img[src*="logo1-1.png"]').first();
    this.navigationMenu = page.locator('ul.fusion-menu').first();
    this.heroSection = page.locator('.fusion-fullwidth', { hasText: 'Svi proizvodi odmah dostupni' });
    this.productsButton = page.locator('a', { hasText: 'POGLEDAJTE PROIZVODE' });
    this.aboutUsSection = page.locator('.fusion-fullwidth', { hasText: 'Shelf Plus d.o.o.' });
    // Remove this line
    // this.popularProductsSection = this.page.locator('.fusion-fullwidth:has-text("Popularni proizvodi")');
    // Update the newsletter section selector to match the element regardless of visibility
    this.newsletterSection = page.locator('.fusion-fullwidth.fusion-flex-container', { hasText: 'Newsletter' }).first();
    this.footerSection = page.locator('.fusion-footer');
  }

  async goto() {
    await this.page.goto('/');
    await this.page.waitForLoadState('networkidle');
  }

  async getNavigationLinks() {
    await this.navigationMenu.waitFor({ state: 'attached' });
    return this.navigationMenu.locator('li.menu-item > a').allInnerTexts();
  }
}
