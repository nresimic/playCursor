import { test, expect } from '@playwright/test';

test('Proizvodi link is present in the menu', async ({ page }) => {
  await page.goto('/');
  const proizvodiLink = page.locator('#menu-item-766 > a');
  await expect(proizvodiLink).toBeVisible();
  await expect(proizvodiLink).toHaveText('Proizvodi');
});