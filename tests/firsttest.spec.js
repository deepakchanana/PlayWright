const { test, expect } = require('@playwright/test');
test('Open Google website', async ({ page }) => {
    await page.goto('https://www.google.com');
    await expect(page).toHaveTitle(/Google/);
});