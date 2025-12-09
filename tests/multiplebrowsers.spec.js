const { chromium } = require('@playwright/test');

(async () => {
  // Launch browser
  const browser = await chromium.launch();

  // Create first context (User 1)
  const user1Context = await browser.newContext();
  const user1Page = await user1Context.newPage();
  await user1Page.goto('https://example.com');

  // Create second context (User 2)
  const user2Context = await browser.newContext();
  const user2Page = await user2Context.newPage();
  await user2Page.goto('https://example.com');

  console.log("Two isolated browser contexts created!");
  
  await browser.close();
});
