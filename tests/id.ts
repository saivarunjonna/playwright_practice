import { chromium ,expect} from "@playwright/test";
(async function(){
    const browser1=await chromium.launch({
        headless:false
    })
    const binstance=await browser1.newContext();
    const page1=await binstance.newPage();
    await page1.goto("https://www.insurancedekho.com/");
    await expect(page1).toHaveURL("https://www.insurancedekho.com/");
    await expect(page1.locator("//a[@title='Login']")).toBeVisible();
    await page1.locator("//a[@title='Login']").click();
    await page1.locator("//span[contains(text(),'Continue')]").click();
    await page1.screenshot({path:'Screenshots/my.png'});
    await browser1.close();
})();