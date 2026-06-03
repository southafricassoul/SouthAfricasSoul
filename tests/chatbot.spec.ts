import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Chatbot Local Fallback', () => {
  test('should respond using local logic engine when API fails', async ({ page }) => {
    // Mock API failure
    await page.route('**/api/chat', route => route.abort('failed'));

    // Go to the embed page
    const filePath = path.resolve('public/embed.html');
    await page.goto(`file://${filePath}`);

    // Wait for the greeting
    await expect(page.locator('.fm-msg.bot').first()).toContainText('Good day');

    // Type a message
    await page.fill('#fm-input', 'Log a fault');
    await page.click('#fm-send-btn');

    // Check for response (it should be from local logic)
    // The first question after "Log a fault" is store name
    await expect(page.locator('.fm-msg.bot').last()).toContainText('store or branch name');

    // Continue the flow
    await page.fill('#fm-input', 'Test Store');
    await page.click('#fm-send-btn');
    await expect(page.locator('.fm-msg.bot').last()).toContainText('full name');

    await page.fill('#fm-input', 'John Doe');
    await page.click('#fm-send-btn');
    await expect(page.locator('.fm-msg.bot').last()).toContainText('equipment category');
  });
});
