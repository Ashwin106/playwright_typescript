import {test,expect } from "@playwright/test";
import LoginPage from "../pages/loginPage";
import { config } from '../config';
import { getDataFromExcel } from "../utils/excelReader";


test.describe('LOGIN TESTS',()=>{

    test.beforeEach("Invoke URL",async({page})=>{
    await page.goto(config.baseUrl);
});
    test('TC_login_01',async({page},testinfo)=>{
    const loginPage=new LoginPage(page);
    const testData=getDataFromExcel('Sheet1',testinfo.title)
    const data=testData[0] as {username:string,password:string}
    await loginPage.login(data.username,data.password)
}); 

test('TC_login_02',async({page},testinfo)=>{
    const loginPage=new LoginPage(page);
    const testData=getDataFromExcel('Sheet1',testinfo.title)
    const data=testData[0] as {username:string,password:string}
   await loginPage.login(data.username,data.password)
   
}); 

test('TC_login_03',async({page},testinfo)=>{
    const loginPage=new LoginPage(page);
    const testData=getDataFromExcel('Sheet1',testinfo.title)
    const data=testData[0] as {username:string,password:string}
   await loginPage.login(data.username,data.password)
   
}); 

})

