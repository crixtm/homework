import { expect, Locator, Page } from '@playwright/test';

export class LoggedInPage {
    readonly page: Page;
    readonly editor: Locator;

    constructor(page: Page){
        this.page = page;
        this.editor = this.page.locator("//a[@href='/editor']");
    }

    async expectLoggedIn(user: string) {
        const profileLink = this.page.getByRole('link', { name: user });
        await expect(profileLink).toBeVisible({ timeout: 10_000 });
    }
}