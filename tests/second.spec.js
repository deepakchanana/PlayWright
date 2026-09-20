const { test, expect } = require('@playwright/test');

test('Open Facebook', async ({ page }) => {
  await page.goto('https://www.facebook.com');

  await expect(page).toHaveTitle(/facebook/);

  // Keep it visible for demonstration
  await page.waitForTimeout(5000);
});
