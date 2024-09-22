import {Browser, Page, expect, chromium} from "@playwright/test";
import {Given, When, Then} from '@cucumber/cucumber';
import { pageFixture } from "../../hooks/pageFixture";

When('user clicks on Admin Tab', async function () {
    await pageFixture.page.locator("//span[text()='Admin']").click(); 
});

Then('user will be navigated to Admin page', async function () {
    expect(await pageFixture.page.locator('.oxd-topbar-header-breadcrumb').textContent()).toEqual('AdminUser Management'); 
});
