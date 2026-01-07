import {test,expect } from "@playwright/test";
import LoginPage from "../pages/loginPage";
import { AdminPage } from "../pages/adminPage";

test('Login and user creation ', async ({ page }) => {
    
    const loginPage=new LoginPage(page);
    const adminPage=new AdminPage(page);
    await loginPage.loginToApp();
    //user creation
   await adminPage.adminbuttonClick();
    await adminPage.addbuttonClick();
    await adminPage.userCreation();

});
// test('user creation',async({page})=>{
//     const adminPage=new AdminPage(page);
//     await adminPage.addbuttonClick();
//     await adminPage.addbuttonClick();
//     await adminPage.userCreation();
    
// });