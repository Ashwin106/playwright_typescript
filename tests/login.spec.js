import {test,expect } from "@playwright/test";
import LoginPage from "../pages/loginPage";
import { config } from '../config';

test('Login to Application with invalid credentials',async({page})=>{
    const loginPage=new LoginPage(page);
   await loginPage.loginToApp(config.invalidUser.username,config.invalidUser.password)
}); 

test('Login to Application with valid credentials',async({page})=>{
    const loginPage=new LoginPage(page);
   await loginPage.loginToApp(config.validUser.username,config.validUser.password)
}); 