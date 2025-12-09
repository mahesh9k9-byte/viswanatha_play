const { test } = require('@playwright/test');

test('Switch tabs', async ({ context }) => {
  const page1 = await context.newPage();
  await page1.goto('https://example.com');

  const page2 = await context.newPage();
  await page2.goto('https://playwright.dev');

  console.log("Page 1 Title:", await page1.title());
  console.log("Page 2 Title:", await page2.title());

  // Perform actions on page2
  await page2.click('text=Get started');
});