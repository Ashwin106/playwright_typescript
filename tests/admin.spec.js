import{test,expect} from '@playwright/test';
import LoginPage from "../pages/loginPage";
import AdminPage from "../pages/adminPage";
test.beforeEach('Login to application',async({page})=>{
    const loginPage=new LoginPage(page);
       await loginPage.loginToApp()
})

test('User creation',async({page})=>{
    const adminPage=new AdminPage(page);
    await adminPage.adminbuttonClick();
    await adminPage.addbuttonClick(); 
    await adminPage.userCreation();
})