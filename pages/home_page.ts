import { expect, Page } from '@playwright/test';
import { HeaderPage } from '@pages/header_page';

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async expectLoaded() {
        expect(await this.page.title()).toContain("Conduit");
        const headerPage = new HeaderPage(this.page);
        await headerPage.expectLogoVisible();
    }
}