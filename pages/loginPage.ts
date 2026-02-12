//import BasePage from "./basePage";
import { expect, Page, Locator } from '@playwright/test';
export class LoginPage {
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly loginButton: Locator
    readonly errorMessage: Locator
    page:Page;

    constructor(page: Page){
        this.page=page;
       //this.usernameInput = '//input[@name="username"]';
        this.usernameInput = this.page.getByPlaceholder('Username');
        this.passwordInput = this.page.getByPlaceholder('Password');
        this.loginButton = this.page.getByRole('button', { name:" Login " });
        this.errorMessage=this.page.locator('p.oxd-alert-content-text');
    }

    async login(username:string,password:string){
        
         //await this.waitForPageLoad();
         await this.usernameInput.fill(username);
         await this.passwordInput.fill(password);
         await this.loginButton.click();
        
    }
    async errormsgassert() {
        const isVisible = await this.errorMessage.isVisible({ timeout: 5000 }).catch(() => false);
        if (isVisible) {
            await expect(this.errorMessage).toContainText('Invalid credentials');

        } else {
            throw new Error('Error message not visible');
        }
    }

     

}
export default LoginPage