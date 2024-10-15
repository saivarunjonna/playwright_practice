const playwright=require('@playwright/test');

async function loaddata(){
    const data_arr=[];
    const myexcel=await require('exceljs');
    const myworkbook=new myexcel.Workbook();
    await myworkbook.xlsx.readFile('C:/Users/10742676/Desktop/practice_playwright/datatesting.xlsx');
    const mysheet=myworkbook.worksheets[0];
    for(let i=2;i<=mysheet.rowCount; i++){  
        const fname=mysheet.getCell(i,1).value;
        const lname=mysheet.getCell(i,2).value;
        const email=mysheet.getCell(i,3).value;
        const password=mysheet.getCell(i,4).value;
        data_arr.push({fisrtname:fname,lastname:lname,mailid:email,pass:password});                  
    }
    return data_arr;

}
(
    async function() {
        const myydata =await loaddata();
        const browser1=await playwright.chromium.launch({
            headless:false
        })
        const binstance=await browser1.newContext();
        const page1=await binstance.newPage();
        for(let i of myydata){
            await page1.goto("https://thinking-tester-contact-list.herokuapp.com/addUser");
            await page1.locator("#firstName").fill(i.fisrtname);
            await page1.locator("#lastName").fill(i.lastname);
            await page1.locator("#email").fill(i.mailid);
            await page1.locator("#password").fill(i.pass);
            await page1.locator("#submit").click();

        }
        
    }

)();