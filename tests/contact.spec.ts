import { test, expect } from '@playwright/test';
import { ContactPage } from '../pages/ContactPage';

test('Correct contact information is present', async ({ page }) => {
  const contactPage = new ContactPage(page);
  await contactPage.goto();
  
  // Debug: Log the current URL
  console.log('Current URL:', page.url());

  // Debug: Take a screenshot
  await page.screenshot({ path: 'debug-screenshot.png' });

  await contactPage.waitForContactInfo();

  // Check phone number
  await expect(contactPage.phoneNumber).toBeVisible();
  const phoneNumberText = await contactPage.phoneNumber.innerText();
  console.log('Phone number:', phoneNumberText);
  expect(phoneNumberText).toBe('+381 60 161 5080');

  // Check email
  await expect(contactPage.email).toBeVisible();
  const emailText = await contactPage.email.innerText();
  console.log('Email:', emailText);
  expect(emailText).toBe('plus.shelf@gmail.com');

  // Check address
  await expect(contactPage.address).toBeVisible();
  const addressText = await contactPage.address.innerText();
  console.log('Address:', addressText);
  expect(addressText).toContain('16. Aprila 6d Beograd, Krnjača 11210');
});
