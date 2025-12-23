import { test } from '@playwright/test';
import dotenv from 'dotenv';


test('read data from .env file', async ({ page }) => {
//   // Read values from .env
//   //console.log('BASE_URL:', process.env.BASE_URL);
//   console.log('USERNAME:', process.env.USERNAME);
//   console.log('PASSWORD:', process.env.PASSWORD);

  // Use baseURL from .env
   await page.goto(process.env.BASE_URL);
   await page.locator("input[name='username']").fill(process.env.USERNAME);
   await page.locator("input[type='password']").fill(process.env.PASSWORD);
 
});
