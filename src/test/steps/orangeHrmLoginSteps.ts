import {Browser, Page, expect, chromium} from "@playwright/test";
import {Given, When, Then} from '@cucumber/cucumber';
import { pageFixture } from "../../hooks/pageFixture";
import { LoginPage } from "../pages/loginPage";

let loginPage:LoginPage;

Given('user is on the organgehrm login page', async function () {
    loginPage = new LoginPage(pageFixture.page);
    await loginPage.navigateTo("https://opensource-demo.orangehrmlive.com/");
});

When('user enters valid username {string}', async function (username: string) {
    await loginPage.enterUsername(username);
});

When('user enters valid password {string}', async function (password: string) {
    await loginPage.enterPassword(password);
});

When('user clicks on the login button', async function () {
    await loginPage.clickLogin();
});
Then('user will be navigated to Dashboard page', async function () {
    await expect(pageFixture.page.locator('.oxd-topbar-header-title')).toBeVisible();
});