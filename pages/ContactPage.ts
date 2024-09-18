import { Page, Locator, expect } from '@playwright/test';

export class ContactPage {
  readonly page: Page;
  readonly phoneNumber: Locator;
  readonly email: Locator;
  readonly address: Locator;

  constructor(page: Page) {
    this.page = page;
    this.phoneNumber = page.locator('.fusion-li-item-content a[href^="tel:"]');
    this.email = page.locator('.fusion-li-item-content a[href^="mailto:"]');
    this.address = page.locator('.fusion-li-item-content', { hasText: 'Aprila' });
  }

  async goto() {
    await this.page.goto('/kontakt/');
  }

  async waitForContactInfo() {
    await this.page.waitForLoadState('networkidle');
    // console.log('Page URL:', this.page.url());
    // console.log('Page content:', await this.page.content());
    
    try {
      await this.phoneNumber.waitFor({ state: 'visible', timeout: 30000 });
    } catch (error) {
      console.error('Phone number not found:', error);
      throw error;
    }
  }

  async getPhoneNumber(): Promise<string> {
    return await this.phoneNumber.innerText();
  }

  async getEmail(): Promise<string> {
    return await this.email.innerText();
  }

  async getAddress(): Promise<string> {
    return await this.address.innerText();
  }
}
