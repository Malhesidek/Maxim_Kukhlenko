import {By, WebDriver, Locator, until} from "selenium-webdriver";
import BasePage  from "./BasePage";

class LoginPage extends BasePage {

    private Username: Locator = By.id("loginusername");
    private Password: Locator = By.id("loginpassword");
    private LogIn: Locator = By.xpath('(//*[@class="btn btn-primary"])[3]');

    constructor(driver: WebDriver){
        super(driver);
    }


    async logIn(Username: string, Password: string){

        await this.driver.findElement(By.id("login2")).click()

        const usernameWebElement = await this.driver.findElement(this.Username);
        await this.driver.wait(until.elementIsVisible(usernameWebElement), 2000);
        await usernameWebElement.sendKeys(Username);

        
        //await this.driver.findElement(this.Username).sendKeys(Username);
        await this.driver.findElement(this.Password).sendKeys(Password);
        await this.driver.findElement(this.LogIn).click();

        //const usernameWebElement = await this.driver.findElement(this.LogIn);
        //await this.driver.wait(until.elementIsVisible(usernameWebElement), 2000);

        //await usernameWebElement.click();

        //await this.driver.findElement(By.id("loginusername")).sendKeys(Username);
        //await this.driver.findElement(By.id("loginpassword")).sendKeys(Password);
        //await this.driver.sleep(3000);
        //await this.driver.findElement(By.className("btn btn-primary")).click();
        
        
    }

    async isLogged() : Promise<boolean>{
        return this.driver.findElement(By.id("nameofuser")).isDisplayed();
    }

}
export default LoginPage;