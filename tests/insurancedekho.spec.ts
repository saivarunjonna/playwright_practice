import {test,expect} from '@playwright/test';

test.beforeEach(async ({page})=>{
    await page.goto("https://www.insurancedekho.com/");
    await expect(page).toHaveURL("https://www.insurancedekho.com/");
} )

test.skip("Login insurancedekho",async({page,browserName})=>{
    // test.skip(browserName=='firefox');
    
   
    await expect(page.locator("a[title='Login']")).toBeVisible();
    await page.locator("a[title='Login']").click();
    // await page.getByLabel()
    await page.locator('#mobileNumber').fill("6305862766");
    await page.getByRole('button',{name:'Continue'}).click()
    
    // await page.locator("//span[contains(text(),'Continue')]").click();
    
    // console.log("execution completed");
    
})

test("hovering operation insurance advisors",async({page,browserName})=>{
    // await page.getByRole('link',{name:'Insurance Advisors'}).hover();
    // test.skip(browserName=='chromium');
    await page.locator('li a[rel="nofollow"]').nth(1).hover();
    await page.getByRole('link', { name: 'Insurance Advisors in New' }).click();
    await expect(page).toHaveURL("https://www.insurancedekho.com/insurance-advisors/insurance-advisor+in-new-delhi");


})
test.describe("vehicle insurance",async ()=>{
    test("Bike insurance",async({page})=>{
        await page.locator('.tabgrp a[title="Bike Insurance"]').click();
        await expect(page).toHaveURL("https://www.insurancedekho.com/bike-insurance");
        await page.locator('.home_formSection input[name="registrationNumber"]').fill("ts16ev0878");
        await page.locator('span:has-text("Check Prices")').click();

    })

    test("Car insurance",async({page})=>{
        await page.locator('.tabgrp a[title="Car Insurance"]').click();
        await expect(page).toHaveURL("https://www.insurancedekho.com/car-insurance");
        await page.locator('.home_formSection input[name="registrationNumber"]').fill("TN66W4050");
        await page.locator('span:has-text("Check Prices")').click();

    })


})
test("IDV calculator",{tag:'@myTest'},async({page,context,browserName})=>{
    test.skip(browserName=='chromium');
    // await expect(page.locator('a[title="IDV Calculator"]')).toBeVisible();
    // const newpage= context.waitForEvent('page');
    await page.locator('a[title="IDV Calculator"]').click();
    const newwindow=await context.waitForEvent('page');
    await newwindow.locator('span:has-text("Calculate Premium")').click();
    // await newwindow.goBack();


    

})
test("investment plans",{tag:'@myTest2'},async({page})=>{
    await page.locator('.tabgrp a[title="Investment Plans"]').click();
    await expect(page).toHaveURL("https://www.insurancedekho.com/investment");
    await expect(page.locator('#goalAmount')).toBeVisible();
    await page.locator('#goalAmount').fill('500000');
    // await page.locator('div[name="Investment term"] div:has-text("10 Years")').click();
    await page.getByText('10 Years',{exact:true}).click();
    await page.locator('button:has-text("Calculate")').click();

})
test("news",async({page})=>{

    await page.locator('a[title="News"]').hover();
    await page.locator('a[title="Life Insurance News"]').click();

    await page.goBack();
    await page.goForward();
})

test.afterEach(async ({page},testInfo)=>{
    await page.screenshot({path: `Newscreenshots/${testInfo.title}.png` });
})

