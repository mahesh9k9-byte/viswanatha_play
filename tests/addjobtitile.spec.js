import { test, expect } from '@playwright/test';

test("verify the job title with mandatory field", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", {
    timeout: 90000
  });

  // Login
  await page.locator("input[name='username']").fill("Admin");
  await page.locator("input[type='password']").fill("admin123");
  await page.locator("button[type='submit']").click();

  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

  // Navigate to Admin > Job > Job Titles
  await page.locator("span:has-text('Admin')").click();
  await page.locator("span:has-text('Job')").click();
  await page.locator("a:has-text('Job Titles')").click();
});
