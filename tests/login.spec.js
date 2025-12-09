import { test, expect } from '@playwright/test';
test("verify Login with valid the credentials", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", {
        timeout: 90000
    });

    await page.locator("input[name='username']").fill("Admin")
    await page.locator("input[type='password']").fill("admin123")
    await page.locator("button[type='submit']").click()
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
})


test("verify Login with valid usename and invalid password", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", {
        timeout: 90000
    });
    await page.locator("input[name='username']").fill("Admin")
    await page.locator("input[type='password']").fill("admin123ooo")
    await page.locator("button[type='submit']").click()
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible();
    await page.close()


})

test("verify Login with invalid usename and valid password", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", {
        timeout: 90000
    });
    await page.locator("input[name='username']").fill("Admiiin")
    await page.locator("input[type='password']").fill("admin123")
    await page.locator("button[type='submit']").click()

})

test("verify Login with invalid usename and invalid password", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", {
        timeout: 10000
    });
    await page.locator("input[name='username']").fill("Admiiin")
    await page.locator("input[type='password']").fill("admin123oo")
    await page.locator("button[type='submit']").click()

})