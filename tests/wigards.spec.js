const { chromium } = require('playwright');

(async () => {
  // Launch browser
  const browser = await chromium.launch({ headless: false }); // set headless: true if you don't want UI
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to DemoQA
  await page.goto('https://demoqa.com/');

  // Wait until the cards are loaded
  await page.waitForSelector('.card-body h5');

  // Extract all card texts
  const texts = await page.$$eval('.card-body h5', elements =>
    elements.map(el => el.textContent.trim())
  );

  // Print the results
  console.log("Icon Texts:");
  texts.forEach(text => console.log(text));

  await browser.close();
})();
