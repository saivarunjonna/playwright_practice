import {test,expect} from '@playwright/test';
const fs=require('fs');
test('cookies fabindia',async({page})=>{
    await page.goto("https://www.fabindia.com/");
    await page.click('button[class="border-0 bg-transparent"]');
    await page.click('button[class="login_password underline-hover"]');
    await page.fill('input[id="logiemail"]',"saivarunjonna@gmail.com");
    await page.fill('input[id="logipass"]',"Sai@varun143");
    await page.click('button[id="send-otp"]');
    const mycookies=await page.context().cookies();
    const cookiefile=JSON.stringify(mycookies);
    fs.writeFileSync('fabcookies.json',cookiefile);
    await page.waitForTimeout(20000);

})
test('testing cookie',async({page})=>{
    await page.goto("https://www.fabindia.com/");
    await page.click('button[class="border-0 bg-transparent"]');
    await page.click('button[class="login_password underline-hover"]');

    const retrive_cookies=JSON.parse(fs.readFileSync('C:/Users/10742676/Desktop/practice_playwright/fabcookies.json','utf8'));
    await page.context().addCookies(retrive_cookies);
    await page.waitForTimeout(30000);


})
test('testing2 cookies',async({page})=>{
    await page.goto("https://www.fabindia.com/");
    await page.click('button[class="border-0 bg-transparent"]');
    await page.click('button[class="login_password underline-hover"]');
    const logindata={
        username:'saivarunjonna@gmail.com',
        password:'Sai@varun143',
        expires:10000000000,
    };

    await page.context().addCookies([
        {
            name:'login_data',
            value:JSON.stringify(logindata),
            expires:logindata.expires,
            domain:'.fabindia.com',
            path:'/',
            secure:true,
            httpOnly:true
        }

    ])
    const cookiename='login_data';
    const cookies=await page.context().cookies();
    const addedcookie=cookies.find((cookie)=>cookie.name===cookiename);
    console.log("before");
    
    console.log(addedcookie);
    console.log("after");
    
    
    const cookievalue=addedcookie.value;
    console.log(cookievalue);
    
    const jsondata=JSON.parse(cookievalue);
    console.log("last");
    console.log(jsondata);
    
    
    const emailid=jsondata.username;
    const id_password=jsondata.password;
    await page.fill('input[id="logiemail"]',emailid);
    await page.fill('input[id="logipass"]',id_password);
    await page.click('button[id="send-otp"]');
    
    // await page.waitForTimeout(30000);


})
