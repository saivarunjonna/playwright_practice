import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.insurancedekho.com/');
  await page.getByRole('link', { name: 'Insurance Advisors in New' }).click();
  await page.goto('https://www.insurancedekho.com/insurance-advisors/insurance-advisor+in-new-delhi');
  await page.goto('https://www.insurancedekho.com/insurance-advisors/insurance-advisor+in-new-delhi#popup');
});
// import {test,expect} from '@playwright/test';
// import {Workbook} from 'exceljs';
test.beforeEach(async({page})=>{
    await page.goto("https://thinking-tester-contact-list.herokuapp.com/");
    await page.locator("#signup").click();
})
test.describe("data extraction",async()=>{
    const myexcel=await require('exceljs');
    const myworkbook=await new myexcel.Workbook();
    await myworkbook.xlsx.readFile('C:/Users/10742676/Desktop/practice_playwright/datatesting.xlsx');
    const mysheet=await myworkbook.worksheets[0];
    const rows1=await mysheet.rows;
    for(let i=2;i<=mysheet.rowCount;i++){  
        const fname=mysheet.getCell(i,1).value;
        const lname=mysheet.getCell(i,2).value;
        const email=mysheet.getCell(i,3).value;
        const password=mysheet.getCell(i,4).value;
        console.log(fname);
        
    }
    test("signup",async({page})=>{
        await page.locator("#firstName").fill(fname);
        await page.locator("#lastName").fill(lname);
        await page.locator("#email").fill(email);
        await page.locator("#password").fill(password);
        await page.locator("#submit").click();
    })
})