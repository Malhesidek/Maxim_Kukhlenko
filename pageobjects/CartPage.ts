import {By, WebDriver, Locator, error} from "selenium-webdriver";
import BasePage from "./BasePage";

class CartPage extends BasePage{

    private Name: Locator = By.id("name");
    private Country: Locator = By.id("country");
    private City: Locator = By.id("city");
    private Credit_card: Locator = By.id("card");
    private Month: Locator = By.id("month");
    private Year: Locator = By.id("year");
    private Purchase: Locator = By.xpath('//*[@id="orderModal"]/div/div/div[3]/button[2]');

    constructor(driver: WebDriver){
        super(driver);
    }

    async placeOrder(Name: string, Country: string, City: string, Credit_card: string, Month: string, Year: string){
        await this.driver.findElement(By.className("btn btn-success")).click()
        await this.driver.sleep(1500);

        await this.driver.findElement(this.Name).sendKeys(Name)
        await this.driver.findElement(this.Country).sendKeys(Country)
        await this.driver.findElement(this.City).sendKeys(City)
        await this.driver.findElement(this.Credit_card).sendKeys(Credit_card)
        await this.driver.findElement(this.Month).sendKeys(Month)
        await this.driver.findElement(this.Year).sendKeys(Year)
        await this.driver.findElement(this.Purchase).click()
        await this.driver.sleep(2500);

    }

    async OkButton(){
        await this.driver.findElement(By.xpath('//html/body/div[10]/div[7]/div/button')).click()
    }

}
export default CartPage;