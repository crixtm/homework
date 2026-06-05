import { expect, Locator, Page } from '@playwright/test';
import { LoginPage } from './login_page';
export class HeaderPage {

    readonly page: Page;
    readonly headerContainer: Locator;
    readonly logo: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.headerContainer = page.locator("//app-layout-header");
        this.logo = this.headerContainer.locator("//img[@src='assets/conduit-logo.svg']");
        this.loginButton = this.headerContainer.locator("//a[@routerlink='/login']");
    }

    async expectLogoVisible() {
        await expect(this.logo).toBeVisible();
    }

    async openLoginPage() {
        await expect(this.loginButton).toBeVisible();
        await this.loginButton.click()
        return new LoginPage(this.page);
    }
}
