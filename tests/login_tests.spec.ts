import { test, expect } from '@fixtures/base_fixture';
import { HeaderPage } from '@pages/header_page';
import { usersValid, usersWrongCredentials } from '@test_data/test_users';
import { createUser } from '@util/util'

test.beforeAll(async () => {
  await createUser();
})

// test.afterAll(async ({browser}) => {
//   await browser.close();
// })

test('Succesful login', async ({ homePage }) => {
  await test.step('Given the customer opens the home page', async () => {
    await homePage.expectLoaded();
  })
  await test.step('When the customer performs login with valid credentials', async () => {
    const headerPage = new HeaderPage(homePage.page);
    const loginPage = await headerPage.openLoginPage();
    const loggedInPage = await loginPage.login(usersValid[0]);
    loggedInPage.expectLoggedIn(usersValid[0].user);
  })

});

for (const user of usersWrongCredentials ) {
  test(`Failed login ${user.user}`, async ({ homePage }) => {
  await test.step('Given the customer opens the home page', async () => {
    await homePage.expectLoaded();
  })
  await test.step('When the customer performs login with valid credentials', async () => {
    const headerPage = new HeaderPage(homePage.page);
    const loginPage = await headerPage.openLoginPage();
    await loginPage.login(user);
    await loginPage.expectInvalidCredentails();
  })

});
}


