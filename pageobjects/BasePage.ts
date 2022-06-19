import { WebDriver} from "selenium-webdriver";

class BasePage{
    protected driver: WebDriver;

    constructor(driver: WebDriver){
        this.driver = driver;
    }

    async getToUrl(url: string){
        await this.driver.get(url);
    }

    async getUrl(){
        return await this.driver.getCurrentUrl();
    }
}

export default BasePage;