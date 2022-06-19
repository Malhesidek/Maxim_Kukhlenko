import {By, WebDriver, Locator} from "selenium-webdriver";
import BasePage from "./BasePage";

class LaptopPage extends BasePage{

    constructor(driver: WebDriver){
        super(driver);
    }

    async getLaptopPage(){
        await this.driver.findElement(By.linkText("Laptops")).click();
    }

    async getDell(){
        await this.driver.sleep(2000);
        await this.driver.findElement(By.xpath('//*[@id="tbodyid"]/div[4]/div/div/h4/a')).click();
    }

    async addToCart(){
        await this.driver.sleep(2000);
        await this.driver.findElement(By.className("btn btn-success btn-lg")).click()
        await this.driver.sleep(2000);
    }

    async getToCart(){
        await this.driver.switchTo().alert().accept()
        await this.driver.sleep(1500);
        await this.driver.findElement(By.xpath("//*[@id=\"cartur\"]")).click()
    }



}
export default LaptopPage;