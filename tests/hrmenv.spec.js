import { test } from '@playwright/test';
import dotenv from 'dotenv';


test('read data from .env file', async ({ page }) => {
  // Use baseURL from .env
   await page.goto(process.env.BASE_URL);
   await page.locator("input[name='username']").fill(process.env.USERNAME);
   await page.locator("input[type='password']").fill(process.env.PASSWORD);
    await page.locator("button[type='submit']").click();


});

