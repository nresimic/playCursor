import { test, expect } from '@playwright/test';
import { ContactPage } from '../pages/ContactPage';

test('Correct contact information is present', async ({ page }) => {
  const contactPage = new ContactPage(page);
  await contactPage.goto();
  
  try {
    await contactPage.waitForContactInfo();
  } catch (error) {
    console.error('Error waiting for contact info:', error);
    throw error;
  }

  const phoneNumber = await contactPage.getPhoneNumber();
  const email = await contactPage.getEmail();
  const address = await contactPage.getAddress();

  console.log('Phone number:', phoneNumber);
  console.log('Email:', email);
  console.log('Address:', address);

  expect(phoneNumber).toBe('+381 60 161 5080');
  expect(email).toBe('plus.shelf@gmail.com');
  expect(address).toContain('16. Aprila 6d B');
});
