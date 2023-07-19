import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  // await for page link of <a href="/dog/1HTmtdDlcWMlxNCwceDw32">Leonberger</a>
  await page.waitForSelector('a[href="/dog/1HTmtdDlcWMlxNCwceDw32"]');
  // click on the link
  await page.click('a[href="/dog/1HTmtdDlcWMlxNCwceDw32"]');
  // find h1 with text Leonberger
  await page.waitForSelector('h1:has-text("Leonberger")');
  // find image
  await page.waitForSelector('img');
  // check for alt text name of Leonberger
  // await expect(page.waitForSelector('img[alt="Leonberger"]'));
  // check the alt tag exist with text Leonberger
  // Retrieve the alt attribute value
  const altAttribute = await page.$eval('img', (img) => img.getAttribute('alt'));
  // Assert the alt attribute value is 'Leonberger'
  expect(altAttribute).toBe('Leonberger');
  // close the browser, close the test
  await page.close();
});