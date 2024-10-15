import {test} from '@playwright/test';
test('network interception',async({page})=>{
    // await page.goto("https://www.fabindia.com/");
    await page.route('**\/*.{png,jpg,jpeg,svg}',(req)=>{
        if(req.request().resourceType()==='image'){
            req.abort();
        }
    })
    await page.goto("https://www.amazon.in/",{waitUntil:'domcontentloaded'});
    await page.waitForTimeout(10000);
})
test('network interception2',async({page})=>{
    // await page.goto("https://www.fabindia.com/");
    await page.route('**/**',async(req)=>{
        const urls=req.request().url();
        if(urls.includes('https://ad.doubleclick.net')){
            await req.abort();
        }
    })
    await page.goto("https://www.nytimes.com/international/");
    await page.waitForTimeout(10000);
})

