import { Page, Locator } from '@playwright/test';

export class ContactPage {
  readonly page: Page;
  readonly phoneNumber: Locator;
  readonly email: Locator;
  readonly address: Locator;

  constructor(page: Page) {
    this.page = page;
    this.phoneNumber = page.locator('.fusion-li-item-content a[href^="tel:"]');
    this.email = page.locator('.fusion-li-item-content a[href^="mailto:"]');
    this.address = page.locator('.fusion-li-item-content', { hasText: '16. Aprila 6d' });
  }

  async goto() {
    await this.page.goto('/kontakt/');
    await this.page.waitForLoadState('networkidle');
  }

  async waitForContactInfo() {
    await this.phoneNumber.waitFor({ state: 'visible', timeout: 30000 });
  }
}
