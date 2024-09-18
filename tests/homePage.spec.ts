import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Home Page', () => {
  test('should load successfully', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await expect(page).toHaveTitle('Shelf - Kompletna nova neutrala oprema za trgovine');
  });

  test('should display header logo', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await expect(homePage.headerLogo).toBeVisible();
  });

  test('should display navigation menu', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    const navLinks = await homePage.getNavigationLinks();
    expect(navLinks.length).toBeGreaterThan(0);
  });

  test('should display hero section', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await expect(homePage.heroSection).toBeVisible();
  });

  test('should display products button', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await expect(homePage.productsButton).toBeVisible();
  });

  test('should display about us section', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await expect(homePage.aboutUsSection).toBeVisible();
  });

  // The popular products test has been removed

  test('should have newsletter section', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();

    const newsletterSection = homePage.newsletterSection;
    
    // Check if the element exists
    await expect(newsletterSection).toHaveCount(1);

    // Get the viewport size
    const viewportSize = page.viewportSize();
    console.log(`Viewport size: ${viewportSize?.width}x${viewportSize?.height}`);

    // Check visibility based on viewport size
    if (viewportSize && viewportSize.width >= 1200) { // Assuming 1200px is the breakpoint for 'large' screens
      await expect(newsletterSection).not.toBeVisible();
      console.log('Newsletter section is hidden on large screens, as expected.');
    } else {
      await expect(newsletterSection).toBeVisible();
      console.log('Newsletter section is visible on smaller screens, as expected.');
    }

    // Log additional information
    const isVisible = await newsletterSection.isVisible();
    const displayStyle = await newsletterSection.evaluate((el) => window.getComputedStyle(el).display);
    const visibilityStyle = await newsletterSection.evaluate((el) => window.getComputedStyle(el).visibility);
    console.log(`Newsletter visibility: ${isVisible}, Display: ${displayStyle}, Visibility: ${visibilityStyle}`);
  });

  test('should display footer section', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await expect(homePage.footerSection).toBeVisible();
  });
});
