import {test as setup,expect} from '@playwright/test';

setup('Login',async({page})=>{
    await page.goto('https://practice.expandtesting.com/');
    await page.locator('//a[text()="Test Login Page"]').click();
    
    await page.locator('#username').fill('practice');
    await page.locator('#password').fill('SuperSecretPassword!');
    await page.locator('#submit-login').click();
    
    const loggedInHeader = '//div[@id="flash"]/b';
    await page.waitForSelector(loggedInHeader);

    await page.context().storageState({path:'.auth/user.json'});
    expect(await page.locator(loggedInHeader).innerText()).toBe('You logged into a secure area!');
    
})