import {Page} from '@playwright/test';
// import type { Fixtures } from '@playwright/test';

// type Url_nav = {
//     nav_page:Page;
// };

export const nav_page = {
    nav_page:async({page}:{page:Page},use:(p:Page)=>Promise<void>)=>{
        await page.goto('/');
        await use(page);
    }
}

// export {expect} from '@playwright/test';

