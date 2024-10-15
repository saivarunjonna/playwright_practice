import { expect,test } from "@playwright/test";
test("file upload",async({page},testInfo)=>{
    await page.goto("https://cgi-lib.berkeley.edu/ex/fup.html");
    const fileupload=await page.locator('input[type="file"]');
    await fileupload.setInputFiles("C:/Users/10742676/Downloads/lti.jpg");
    await page.screenshot({path:`Newscreenshots/${testInfo.title}.png`});
    await page.locator('input[value="Press"]').click();
    
})