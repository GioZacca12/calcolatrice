// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('has footer copyright', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page.locator('div.footer__copyright')).toHaveText(/(Copyright|©)\s*20\d{2}[\s.,-]*Microsoft/i);
});

test('has loglist 9 logos', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  const logoList = page.locator('ul[class^="logosList_"]');
  const listItems = logoList.locator('li');

  await expect(listItems).toHaveCount(9)
});

test('has docs installing playwright', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/intro');

  const heading = page.locator('h2#installing-playwright');

  await expect(heading).toHaveText('Installing Playwright');
});

test('navigates from home to docs', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await page.getByRole('link', { name: 'Docs' }).click();

  await expect(page).toHaveTitle('Installation | Playwright');
});

test('opens modal on DocSearch button click', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await page.locator('.DocSearch-Button').click()

  await page.keyboard.press('Control+k');

  const searchInput = page.locator('input.DocSearch-Input');

  await expect(searchInput).toBeVisible();

  await searchInput.fill('annotation');

  const results = page.locator('.DocSearch-Hits [role="option"]');

  await expect(results).toContainText('annotation');
});
