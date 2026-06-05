import { expect, Locator, Page } from '@playwright/test';
import { User } from '@test_data/user_type';
import { LoggedInPage } from './logged_in_page';

export class LoginPage {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly invalidCrednetials: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = this.page.locator("//input[@name='email']");
        this.passwordInput = this.page.locator("//input[@name='password']");
        this.loginButton = this.page.getByRole('button');
        this.invalidCrednetials = this.page.locator("//ul[@class='error-messages']");
    };

    async expectPageLoaded() {
        expect(this.page.url).toContain("login");
    }

    async login(user: User) {
        await this.emailInput.fill(user.credentials.email);
        await this.passwordInput.fill(user.credentials.pass);
        await this.loginButton.click();
        return new LoggedInPage(this.page);
    }

    async expectInvalidCredentails() {
        await expect(this.invalidCrednetials).toBeVisible();
    }
}