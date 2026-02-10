import {BasePage} from "./basePage";
import {expect,Page,Locator} from '@playwright/test';
//import { expect } from "allure-playwright";
export class AdminPage extends BasePage{ 
        readonly adminButton: Locator;
        readonly addButton:Locator;

        


    constructor(page:Page){
        //this.page=page;
        super(page)
        //this.adminButton = '//a//span[text()="Admin"]';
        this.adminButton = this.page.getByText('Admin');
        this.addButton = this.page.getByRole('button', { name: " Add " });
        this.userroleDropdown = this.page.locator('oxd-select-text oxd-select-text--active').nth(0);
        this.employeeName = this.page.getByPlaceholder('Type for hints...');
        this.statusDropdown = this.page.locator('oxd-select-text oxd-select-text--active').nth(1);
        // this.userroleDropdown='(//label[text()="User Role"]//following::div[text()="-- Select --"])[1]';
        // this.roleList='(//div[@role="listbox"])[1]';
        // this.employeeName='//input[@placeholder="Type for hints..."]';
        // this.statusDropdown='(//label[text()="Status"]//following::div[text()="-- Select --"])[1]';
        // this.usernameText='//label[text()="Username"]//following::input[1]';
        // this.passwordText='//label[text()="Password"]//following::input[1]';
        // this.confirmPassword='//label[text()="Confirm Password"]//following::input[1]';
        // this.saveButton='//button[text()=" Save "]';
    }

    async adminbuttonClick() {
         
       // await this.waitForPageLoad();
       console.log("clicking on admin button");
      //  await expect(this.adminButton).toBeVisible();
        await this.waitAndClick(this.adminButton);
        console.log("clicked on admin option");
    }
    async addbuttonClick(){
        await this.waitForPageLoad();
        await this.waitAndClick(this.addButton);
        console.log("clicked on add option");
    }
    async userCreation(){
        await this.selectCustomDropdown(this.userroleDropdown,this.roleList,'Admin');
        console.log("selected user role...");
      
        await this.enterAndselectCustomDropdown(this.employeeName, this.roleList, 'Ravi M B');
        console.log("entered employee name...")

        await this.selectCustomDropdown(this.statusDropdown, this.roleList, 'Enabled');
        console.log("selected status..");

        await this.waitAndEntertext(this.usernameText, 'Steve Rogers');
        console.log("Entered username...");

        await this.waitAndEntertext(this.passwordText, 'Qwerty123');
        console.log("Entered password...");

        await this.waitAndEntertext(this.confirmPassword, 'Qwerty123');
        console.log("Entered confirm password...");

        await this.waitAndClick(this.saveButton);
        console.log("Clicked save button...");
    }

}