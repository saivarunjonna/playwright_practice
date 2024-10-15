import {test} from '@playwright/test';
test('tab switch',async({page,context})=>{
    await page.goto("https://www.hyrtutorials.com/p/window-handles-practice.html");
    await page.locator('#newTabBtn').click();
    const newtab=await context.waitForEvent('page');
    newtab.on('dialog',(my)=>{
        my.accept();
    })
    await newtab.locator("#confirmBox").click();
    await newtab.close();
    // await newtab.goBack();
    await page.locator('#newTabBtn').click();
    await page.waitForTimeout(4000);
    await page.close();
    

})
test('new window',async({page,context})=>{
    await page.goto("https://www.hyrtutorials.com/p/window-handles-practice.html",{waitUntil:'domcontentloaded'});
    await page.locator("#newWindowBtn").click();
    const newpage2=await context.waitForEvent('page');
    // await newpage2.setViewportSize({width:1920,height:1080});
    await newpage2.locator('#selectnav2').selectOption({label:'Contact'});
    await newpage2.waitForTimeout(4000);
    console.log(context.pages().length);
})
test('radio button',async({page})=>{
    await page.goto("https://qa-automation-practice.netlify.app/radiobuttons.html");
    await page.getByLabel("Radio button 2").check();
    await page.locator("//a[text()='Buttons']").click();
    await page.locator('#checkboxes').click();
    await page.locator('#checkbox1').check();
    await page.locator('#checkbox3').check();


})