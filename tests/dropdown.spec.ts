import {test} from '@playwright/test';
test('dropdown menu',async({page})=>{
    await page.goto("https://www.globalsqa.com/demo-site/select-dropdown-menu/");
    const dropdown_menu='//select';
    const allitems=await page.locator("//option").all();
    console.log(allitems.length);
    for(const country of allitems){
        console.log(await country.textContent());
    }
    await page.selectOption(dropdown_menu,{value:'IND'});
    await page.waitForTimeout(3000);
    await page.selectOption(dropdown_menu,{label:'Djibouti'});
    await page.waitForTimeout(3000);
})