import {test,expect} from '../fixtures/custom_fixture';
require('dotenv').config();

const username = process.env.ADMIN_USERNAME || '';
const password = process.env.ADMIN_PASSWORD || '';

test('Verifying Basepathurl navigation directly from config file',async({page})=>{
    await page.goto('/');
    console.log('NAVIGATED TO URL', page.url());
    await expect(page).toHaveURL('https://practice.expandtesting.com/');
})



test('Fixture custom called',async({LoggedInPage})=>{
    console.log(username,password)
    console.log(LoggedInPage.url());
    await LoggedInPage.locator('//input[@id="username"]').fill(username);
    await LoggedInPage.locator('//input[@id="password"]').fill(password);
    await LoggedInPage.locator('//button[@id="submit-login"]').click();
    let message = await LoggedInPage.locator('#flash').locator('b').innerText();
    console.log(message);
    await expect(message).toBe('You logged into a secure area!')
})
