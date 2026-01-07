import { expect,Page,Locator } from "@playwright/test";
export class BasePage{
    protected page: Page
    constructor(page:Page){
        this.page=page;
    }
    async wait(){
        return this.page.waitForTimeout(20000)
    }
    async waitAndClick(locator:Locator){
        return await locator.click()
    }
    async waitAndEntertext(locator:Locator,text:string){
        return await locator.fill(text)

    }
    async waitForPageLoad() {
		return await this.page.waitForLoadState('domcontentloaded')
    }

    // async getText(selector:Locator){
    //     const Text=await this.page.locator(selector).innerText()
    //     return Text

    // }
    async selectFromDropdown(dropdown: Locator,text:string){
        //const dropdown=await this.page.locator(Selector)
        await dropdown.waitFor({state:'visible',timeout:10000})
         await dropdown.click();
         const option=this.page.getByRole('option',{name:text});
         await option.waitFor({state:'visible'});
         await option.click({force:true});
         await this.page.waitForTimeout(1000);
    }
   

    async enterAndselectDropdown(dropdown:Locator,text:string){
        await dropdown.waitFor({state:'visible',timeout:10000})
        await dropdown.fill(text);
        const option=this.page.getByRole('option',{name:text});
         await option.waitFor({state:'visible'});
         await option.click({force:true});
         await this.page.waitForTimeout(1000);

}
}