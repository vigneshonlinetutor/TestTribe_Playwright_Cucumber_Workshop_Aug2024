import {Browser, Page, expect, chromium} from "@playwright/test";
import {Given, When, Then} from '@cucumber/cucumber';

let browser:Browser;
let page:Page;

Given('user is on the organgehrm login page', async function () {
    browser = await chromium.launch();
    page = await browser.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/");
});

When('user enters valid username', async function () {
    await page.locator('input[name="username"]').fill('Admin');
});

When('user enters valid password', async function () {
    await page.locator('input[name="password"]').fill('admin123');
});

When('user clicks on the login button', async function () {
    await page.locator('button[type="submit"]').click(); 
});
Then('user will be navigated to Dashboard page', async function () {
    await expect(page.locator('.oxd-topbar-header-title')).toBeVisible();
});