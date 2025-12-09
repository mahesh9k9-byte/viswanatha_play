import { test } from "@playwright/test";
import { LoginPage } from "./pageObjects/loginpage.po";

test("verify the orange hrm", async ({ page }) => {
  const login = new LoginPage(page);

  await login.launchApplication();
  await login.verifyLogo();
});

test("Logo verified", async ({ page }) => {
  const login = new LoginPage(page);

  await login.launchApplication();
  await login.verifyLogo();
});

test("No error message", async ({ page }) => {
  const login = new LoginPage(page);

  await login.launchApplication();
  await login.verifyErrorMessage(); // use correct method name
});
