const { test } = require('@playwright/test');

test('Amazon phones high to low - print first 5 products', async ({ page }) => {
  // Step 1: Open Amazon
  await page.goto('https://www.amazon.in/');

  // Step 2: Search for phones
  await page.fill('#twotabsearchtextbox', 'phones');
  await page.click('#nav-search-submit-button');
  await page.waitForLoadState('domcontentloaded');

  // Step 3: Apply "Sort by: Price: High to Low"
  await page.locator('span.a-dropdown-label').click();
  await page.locator('a#s-result-sort-select_2').click(); // option "Price: High to Low"
  await page.waitForLoadState('domcontentloaded');

  // Step 4: Grab first 5 product titles & prices
  const productNames = await page.locator('span.a-size-medium.a-color-base.a-text-normal').allTextContents();
  const productPrices = await page.locator('span.a-price-whole').allTextContents();

  console.log("===== Top 5 Phones (High → Low) =====");
  for (let i = 0; i < 5; i++) {
    console.log(`${i + 1}. ${productNames[i]} - ₹${productPrices[i]}`);
  }
});
