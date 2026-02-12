import {test,expect } from "@playwright/test";
import LoginPage from "../pages/loginPage";
import { config } from '../config';
import { getDataFromExcel } from "../utils/excelReader";


test.describe('LOGIN TESTS',()=>{

    test.beforeEach("Invoke URL",async({page})=>{
    await page.goto(config.baseUrl);
});
    test('TC_login_01', async ({ page }, testinfo) => {
      await test.step('Login with valid credentials', async () => {
        const loginPage=new LoginPage(page);
        const testData=getDataFromExcel('Sheet1',testinfo.title)
        const data=testData[0] as {username:string,password:string}
        await loginPage.login(data.username,data.password)
      })
      await test.step('Verify successful login', async () => {
        // Add assertions to verify successful login, e.g., check for a specific element on the dashboard
        const adminbutton = page.locator('//span[text()="Admin"]'); 
        await adminbutton.waitFor({ state: 'visible', timeout: 5000 });
        await expect(adminbutton).toBeVisible();
      });

            }); 

    test('TC_login_02', async ({ page }, testinfo) => {
        await test.step('Login with valid credentials', async () => {
            const loginPage = new LoginPage(page);
            const testData = getDataFromExcel('Sheet1', testinfo.title)
            const data = testData[0] as { username: string, password: string }
            await loginPage.login(data.username, data.password)
   
        })
        await test.step('Verify error message for invalid login', async () => {
            const loginPage = new LoginPage(page);
            await loginPage.errormsgassert();
        }); 
    });
    
    
    

    test('TC_login_03', async ({ page }, testinfo) => {
        await test.step('Login with valid credentials', async () => {
            const loginPage = new LoginPage(page);
            const testData = getDataFromExcel('Sheet1', testinfo.title)
            const data = testData[0] as { username: string, password: string }
            await loginPage.login(data.username, data.password)
   
        })
        await test.step('Verify error message for invalid login', async () => {
            const loginPage = new LoginPage(page);
            await loginPage.errormsgassert();
        });
    }); 

})

