import BasePage from "./basePage";
import { expect } from "allure-playwright";
class RecritmentPage extends BasePage{
    constructor(page) {
        super(page)
        this.recruitmentoption = '//a//span[text()="Recruitment"]';
        this.addButton = '//button[text()=" Add "]';
        this.firstNameInput = '//input[@placeholder="First Name"]';
        this.middleNameInput = '//input[@placeholder="Middle Name"]';
        this.lastNameInput = '//input[@placeholder="Last Name"]';
        this.vacancyDropdown = '(//label[text()="Vacancy"]//following::div[text()="-- Select --"])[1]';
        this.vacancyList = '(//div[@role="listbox"])[1]';
        this.emailInput = '//div//label[text()="Email"]//following::input[@placeholder="Type here"][1]';
        this.contactNumInput = '//div//label[text()="Contact Number"]//following::input[@placeholder="Type here"][1]';

        
        
    }
}