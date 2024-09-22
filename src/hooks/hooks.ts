import {After, Before, BeforeAll, AfterAll, Status} from "@cucumber/cucumber"
import {Browser, Page, expect, chromium, BrowserContext} from "@playwright/test";
import { pageFixture } from "./pageFixture";

let browser:Browser;
let page:Page;
let context:BrowserContext;

BeforeAll(async function(){
    browser = await chromium.launch({headless:false});
});

Before(async function(){
    context = await browser.newContext();
    page = await browser.newPage();
    pageFixture.page = page;
});

After(async function({pickle,result}){

    if(result.status == Status.FAILED){
        const image = await pageFixture.page.screenshot({path:`./test-result/screenshots/${pickle.name}.png`, type:"png"});
        await this.attach(image, "image/png")
    }
    await page.close();
    await context.close();
});

AfterAll(async function(){
    await browser.close();
});