const { test, expect } = require('@playwright/test');

test('Open Google', async ({ page }) => {
  await page.goto('https://www.google.com');

  await expect(page).toHaveTitle(/Google/);

  // Keep it visible for demonstration
  await page.waitForTimeout(5000);
});
