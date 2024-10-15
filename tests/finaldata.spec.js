// import {test,chromium} from '@playwright/test';
// import {Workbook} from 'exceljs';
// async function loaddata(){
//     const data_arr=[];
//     const myexcel=await require('exceljs');
//     const myworkbook=new myexcel.Workbook();
//     await myworkbook.xlsx.readFile('C:/Users/10742676/Desktop/practice_playwright/datatesting.xlsx');
//     const mysheet=myworkbook.worksheets[0];
//     for(let i=2;i<=mysheet.rowCount; i++){  
//         const fname=mysheet.getCell(i,1).value;
//         const lname=mysheet.getCell(i,2).value;
//         const email=mysheet.getCell(i,3).value;
//         const password=mysheet.getCell(i,4).value;
//         data_arr.push({fisrtname:fname,lastname:lname,mailid:email,pass:password});                  
//     }
//     return data_arr;

// }
// test(`signup multiple users`,async({page})=>{
//     const mydata=await loaddata();
//     for(let data of mydata){
//         await page.goto("https://thinking-tester-contact-list.herokuapp.com/addUser");
//         await page.locator("#firstName").fill(data.fisrtname);
//         await page.locator("#lastName").fill(data.lastname);
//         await page.locator("#email").fill(data.mailid);
//         await page.locator("#password").fill(data.pass);
//         await page.locator("#submit").click();

//     }

// })
// test('json data',async({page})=>{
//     const alldata=require("C:/Users/10742676/Desktop/practice_playwright/tests/mydata.json");
//     console.log(alldata);
    
    
//     for(let data of alldata){
//         await page.goto("https://thinking-tester-contact-list.herokuapp.com/addUser");
//         await page.locator("#firstName").fill(data.Fname);
//         await page.locator("#lastName").fill(data.lname);
//         await page.locator("#email").fill(data.Email);
//         await page.locator("#password").fill(data.password);
//         await page.locator("#submit").click();

//     }

// })


// // test("test user 1",async({page})=>{
// //     const mydata=await loaddata();
// //     const myuser=mydata[0];
// //     await page.goto("https://thinking-tester-contact-list.herokuapp.com/addUser");
// //     await page.locator("#firstName").fill(myuser.fisrtname);
// //     await page.locator("#lastName").fill(myuser.lastname);
// //     await page.locator("#email").fill(myuser.mailid);
// //     await page.locator("#password").fill(myuser.pass);
// //     await page.locator("#submit").click();
    
// // });
// // (
// //     async function() {
// //         const myydata =await loaddata();
// //         const browser1=await chromium.launch({
// //             headless:false
// //         })
// //         const binstance=await browser1.newContext();
// //         const page1=await binstance.newPage();
// //         for(let i of myydata){
// //             await page1.goto("https://thinking-tester-contact-list.herokuapp.com/addUser");
// //             await page1.locator("#firstName").fill(i.fisrtname);
// //             await page1.locator("#lastName").fill(i.lastname);
// //             await page1.locator("#email").fill(i.mailid);
// //             await page1.locator("#password").fill(i.pass);
// //             await page1.locator("#submit").click();

// //         }
        
// //     }

// // )();
// // (
// //     async function(){
// //         const mydata1=await loaddata();
// //         for(let i of mydata1){
// //             test(`signup ${i.fisrtname}`,async({page})=>{
// //                 await page1.goto("https://thinking-tester-contact-list.herokuapp.com/addUser");
// //                 await page1.locator("#firstName").fill(i.fisrtname);
// //                 await page1.locator("#lastName").fill(i.lastname);
// //                 await page1.locator("#email").fill(i.mailid);
// //                 await page1.locator("#password").fill(i.pass);
// //                 await page1.locator("#submit").click();
// //             })
// //         }
// //     }
// // )();



// // async function testingdata(){
// //     const data_new=await loaddata();
// //     for(const data of data_new){
// //         test(`signup ${data.fisrtname}`,async({page})=>{
// //             await page.goto("https://thinking-tester-contact-list.herokuapp.com/addUser");
// //             await page.locator("#firstName").fill(data.fisrtname);
// //             await page.locator("#lastName").fill(data.lastname);
// //             await page.locator("#email").fill(data.mailid);
// //             await page.locator("#password").fill(data.pass);
// //             await page.locator("#submit").click();
// //         })
// //     }
// // }



// // test.describe('group',async()=>{
// //     test.beforeEach(async({page})=>{
// //         await page.goto("https://thinking-tester-contact-list.herokuapp.com/addUser");
// //     })
// //     const mydata=loaddata();
// //     mydata.forEach(data=>{
// //         test("sign up of user",async({page})=>{
            
// //             await page.locator("#firstName").fill(data.fisrtname);
// //             await page.locator("#lastName").fill(data.lastname);
// //             await page.locator("#email").fill(data.mailid);
// //             await page.locator("#password").fill(data.pass);
// //             await page.locator("#submit").click();
// //         })
// //     })

// // })



































// // test.beforeEach(async({page})=>{
// //     await page.goto("https://thinking-tester-contact-list.herokuapp.com/addUser");
// // })
// // test.describe('sample',async({page})=>{
// //     const mydata=await loaddata();
// //     console.log(mydata);
// //     for(const data of mydata){
// //         test('signup',async()=>{
// //             await page.locator("#firstName").fill(i.fisrtname);
// //             await page.locator("#lastName").fill(i.lastname);
// //             await page.locator("#password").fill(i.pass);
// //             await page.locator("#submit").click();

// //         })
// //     }
    
// //     // mydata.forEach(async (i)=>{
        
// //     //     await page.locator("#firstName").fill(i.fisrtname);
// //     //     await page.locator("#lastName").fill(i.lastname);
// //     //     // await page.screenshot({path:"Newscreenshots/data.png"});
// //     //     // await page.locator("#email").fill(i.mailid);
// //     //     await page.locator("#password").fill(i.pass);
// //     //     await page.locator("#submit").click();
        
// //     // })
// // })




// // // test.describe("extract data from excel",async()=>{
// // //     const mydata=await loaddata();
// // //     mydata.forEach(({fisrtname,lastname,mailid,pass})=>{
// // //         test(`testing with ${fisrtname}`,async({page})=>{
// // //             await page.goto("https://thinking-tester-contact-list.herokuapp.com/addUser")
// // //             await page.locator("#firstName").fill(fisrtname);
// // //             await page.locator("#lastName").fill(lastname);
// // //             await page.locator("#email").fill(mailid);
// // //             await page.locator("#password").fill(pass);
// // //             await page.locator("#submit").click();
// // //         })
// // //     })
// // // })