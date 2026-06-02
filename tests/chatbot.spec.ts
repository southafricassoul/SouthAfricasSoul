import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:5174';

test('chatbot fallback works when backend is missing', async ({ page }) => {
  await page.route('**/api/chat', route => route.abort('failed'));
  await page.goto(`${BASE_URL}/embed.html`);

  await expect(page.locator('.fm-msg.bot').first()).toContainText('Good day');

  await page.fill('#fm-input', 'Log a fault');
  await page.click('#fm-send-btn');

  // The local engine will skip the introduction if it sees 'Log a fault'
  // Or it will just respond to the input.
  await expect(page.locator('.fm-msg.bot').nth(1)).toContainText('store or branch name', { timeout: 10000 });
});

test('chatbot handles diagnostic flow correctly', async ({ page }) => {
  await page.route('**/api/chat', route => route.abort('failed'));
  await page.goto(`${BASE_URL}/embed.html`);

  // First bot message is index 0
  await expect(page.locator('.fm-msg.bot').nth(0)).toContainText('Good day');

  // Input: Log a fault (to start the identification phase)
  await page.fill('#fm-input', 'Log a fault');
  await page.click('#fm-send-btn');

  // Bot should ask for Store (index 1)
  await expect(page.locator('.fm-msg.bot').nth(1)).toContainText('store or branch name');

  // Input: Test Store
  await page.fill('#fm-input', 'Test Store');
  await page.click('#fm-send-btn');

  // Bot should ask for Name (index 2)
  await expect(page.locator('.fm-msg.bot').nth(2)).toContainText('full name');

  // Input: Jules
  await page.fill('#fm-input', 'Jules');
  await page.click('#fm-send-btn');

  // Bot should ask for Category (index 3)
  await expect(page.locator('.fm-msg.bot').nth(3)).toContainText('equipment category');
});
