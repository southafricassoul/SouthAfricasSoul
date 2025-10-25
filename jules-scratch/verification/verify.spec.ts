import { test, expect } from '@playwright/test';

test('Navigate to About Page and take screenshot', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // Click the "About" link
  await page.click('text=📖 About');

  // Wait for the navigation to complete
  await page.waitForURL('http://localhost:5173/about');

  // Take a screenshot of the page
  await page.screenshot({ path: 'jules-scratch/verification/verification.png' });
});
