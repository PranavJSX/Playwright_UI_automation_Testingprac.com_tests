import {test as base, Page} from '@playwright/test';
import {nav_page} from '../fixtures/navigation_fixture';
import { Network_request } from '../fixtures/network_fixture';

type Mycustoms = {
    nav_page:Page,
}

export const test = base.extend<Mycustoms>(nav_page).extend(Network_request);

export {expect} from '@playwright/test';