import { expect,test } from "@playwright/test";
const fs1=require('fs');
test.beforeEach(async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/");
})
test("Dummy login with correct credentials",async({page,context})=>{
    
    await page.locator("div #username").pressSequentially("student");
    // await page.locator("div #username").press('Backspace');
    
    await page.locator("div #password").pressSequentially("Password123");
    await page.locator("button[id='submit']").click();
    const mycookies=await context.cookies();
    const jsoncookie=await JSON.stringify(mycookies); 
    fs1.writeFileSync('mycookies.json',jsoncookie);
    

    await expect(page).toHaveURL("https://practicetestautomation.com/logged-in-successfully/");
    const msg=await page.locator('.post-title').textContent();
    const expected_msg="Logged In Successfully";
    await expect(msg).toBe(expected_msg);

})
test("Dummy login with incorrect credentials",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator("div #username").fill("Varun");
    await page.locator("div #password").fill("12345678");
    await page.locator("button[id='submit']").click();
    const username_errormsg=await page.locator("#error").textContent();
    const displayed_msg="Your username is invalid!";
    await expect(username_errormsg).toBe(displayed_msg);

})

test("Dummy login with correct username and incorrect password",async({page})=>{
    await page.locator("div #username").fill("student");
    await page.locator("div #password").fill("12345678");
    await page.locator("button[id='submit']").click();
    const password_errormsg=await page.locator("#error").textContent();
    const displayed_msg="Your password is invalid!";
    await expect(password_errormsg).toBe(displayed_msg);

})
test("alphanumeric values",async({page})=>{
    await page.locator("div #username").fill("s_@tud123,@./");
    await page.locator("div #password").fill("794yuefhi7y");
    await page.locator("button[id='submit']").click();
    const username_errormsg=await page.locator("#error").textContent();
    const displayed_msg="Your username is invalid!";
    await expect(username_errormsg).toBe(displayed_msg);
})
test.afterEach(async({page},testInfo)=>{
    await page.screenshot({path:`Newscreenshots/${testInfo.title}.png`});

})