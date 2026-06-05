import { expect, Locator, Page } from '@playwright/test';
import { HeaderPage } from './header_page';

export class LoggedInPage {
    readonly page: Page;
    readonly editor: Locator;

    constructor(page: Page){
        this.page = page;
        this.editor = this.page.locator("//a[@href='/editor']");
    }

    async expectLoggedIn(user: string) {
        await expect(this.editor).toBeVisible({timeout: 10_000});
    }
}