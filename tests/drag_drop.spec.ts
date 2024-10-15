import {test} from '@playwright/test';
test('drag and drop',async({page})=>{
    await page.goto("https://demo.automationtesting.in/Static.html");
    await page.locator('#mongo').dragTo(page.locator('#droparea'));
    await page.locator('#node').dragTo(page.locator('#droparea'));

    await page.locator('#angular').hover();
    await page.mouse.down();
    await page.locator('#droparea').hover();
    await page.mouse.up()
    
})