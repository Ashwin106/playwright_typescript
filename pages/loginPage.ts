//import BasePage from "./basePage";
import { expect, Page, Locator } from '@playwright/test';
export class LoginPage {
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly loginButton:Locator
    page:Page;

    constructor(page: Page){
        this.page=page;
       //this.usernameInput = '//input[@name="username"]';
        this.usernameInput = this.page.getByPlaceholder('Username');
        this.passwordInput = this.page.getByPlaceholder('Password');
        this.loginButton = this.page.getByRole('button', { name:" Login " });
       //this.passwordInput='//input[@name="password"]'
       // this.loginButton='//button[@type="submit"]';
    }

    async login(username:string,password:string){
        
         //await this.waitForPageLoad();
         await this.usernameInput.fill(username);
         await this.passwordInput.fill(password);
         await this.loginButton.click();
        
    }

     

}
export default LoginPage