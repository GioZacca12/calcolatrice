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

  // Expect a footer "to contain" a substring.
  await expect(page.locator('div.footer__copyright')).toHaveText(/(Copyright|©)\s*20\d{2}[\s.,-]*Microsoft/i);
});

test('has loglist 9 logos', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Seleziona la lista ul.logolist
  const logoList = page.locator('ul[class^="logosList_"]');

  // Conta quanti li ci sono dentro
  const listItems = logoList.locator('li');

  await expect(listItems).toHaveCount(9)
});
