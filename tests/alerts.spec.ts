import {test} from '@playwright/test';
// test('alerts',async({page})=>{
//     await page.goto("https://www.hyrtutorials.com/p/alertsdemo.html");
    
//     // await page.locator('#alertBox').click();
//     // await page.waitForTimeout(5000);
    
//     // page.on('dialog',(mydialog)=>{
        
//     //     mydialog.accept()
//     // })
//     await page.locator('#confirmBox').click();
//     await page.waitForTimeout(3000);
//     page.screenshot({path:'Newscreenshots/cancel.png'});
//     page.on('dialog',(dialog)=>{
//         dialog.dismiss();
//     })
//     await page.waitForTimeout(5000);



// })
test('alert prompt',async({page})=>{
    await page.goto("https://www.hyrtutorials.com/p/alertsdemo.html");

    page.on('dialog', (dialog) => {
        dialog.accept("hello all welcome");
    })
    await page.locator('#promptBox').click();
    await page.waitForTimeout(5000);
    

})
test('cancel alert',async({page})=>{
    await page.goto("https://www.hyrtutorials.com/p/alertsdemo.html");
    page.on('dialog',(dialog1)=>{
        dialog1.accept();
    })
    await page.locator('#confirmBox').click();

})