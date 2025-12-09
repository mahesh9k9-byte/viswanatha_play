import { expect } from "@playwright/test";

export class LoginPage {
    constructor(page) {
        this.page = page;
        this.logo = page.locator('img[alt="company-branding"]');
        this.usernameInput = page.locator('input[name="username"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.loginButton = page.locator('button[type="submit"]');
        this.errorMessage = page.getByText("Invalid credentials");
    }

    async launchApplication() {
        await this.page.goto("/web/index.php/auth/login");
    }

    async verifyLogo() {
        await expect(this.logo).toBeVisible();
    }

    async loginWithCreds(username, password) {
        await login.loginWithCreds("Admin", "admin123");
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async verifyErrorMessage() {
        await expect(this.errorMessage).toBeVisible();
    }
    
}


