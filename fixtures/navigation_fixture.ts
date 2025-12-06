import {test as base,Page} from '@playwright/test';

type Url_nav = {
    nav_page:Page,
};

export const test = base.extend<Url_nav>({
    nav_page:async({page},use)=>{
        await page.goto('/');
        await use(page)
    },
});

export {expect} from '@playwright/test';