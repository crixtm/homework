import { test as base, expect} from "@playwright/test";
import { HomePage } from "@pages/home_page";

type UIFixtures = { 
    homePage: HomePage;
};

export const test = base.extend<UIFixtures>({
    page: async ({ page, baseURL }, use) => {
        await page.goto(baseURL ?? "/")
        await use(page);
    },

    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    }
});

export { expect }; 