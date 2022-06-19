import {expect} from 'chai';
import 'mocha';
import {Builder, By, WebDriver, until} from 'selenium-webdriver';

import LaptopPage from '../pageobjects/LaptopPage';
import LoginPage from "../pageobjects/LoginPage"
import CartPage from "../pageobjects/CartPage"

describe('Demoblaze testing script', () => {

    let driver: WebDriver;
    let loginPage: LoginPage;
    let laptopPage: LaptopPage;
    let cartPage: CartPage;

    before(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();
        loginPage = await new LoginPage(driver);
        laptopPage = await new LaptopPage(driver);
        cartPage = await new CartPage(driver);
        
    });

    it('log in', async () => {
        await loginPage.getToUrl("https://www.demoblaze.com/");
        await driver.sleep(1500);
        await loginPage.logIn('Guest56', 'qwerty');
        expect(await loginPage.isLogged());
    }).timeout(10000);


    it ('laptop category', async () => {
        await driver.sleep(3000);
        await laptopPage.getLaptopPage();
        expect(await laptopPage.getUrl()).to.equal('https://www.demoblaze.com/#');

    }).timeout(10000);

    it ('dell i7 8 gb notebook', async () => {
        await laptopPage.getDell();
        await driver.sleep(3000);
        expect(await laptopPage.getUrl()).to.equal('https://www.demoblaze.com/prod.html?idp_=12');
    }).timeout(10000);

    it('add to cart', async () => {
        await laptopPage.addToCart();
        expect(await driver.switchTo().alert().getText()).to.equal("Product added.");
    }).timeout(10000);

    it('cart page', async () => {
        await laptopPage.getToCart();
        expect(await laptopPage.getUrl()).to.equal("https://www.demoblaze.com/cart.html");
    }).timeout(10000);

    it('place order', async () => {
        await cartPage.placeOrder("Max","Ukraine","Kyiv","63502369048483475","10","2023");
        expect(await driver.findElement(By.css("body > div.sweet-alert.showSweetAlert.visible"))
            .getAttribute("class")).to.equal("sweet-alert  showSweetAlert visible");
    }).timeout(10000);

    it('pop-up "Thank you for your purchase!"', async () => {
        await cartPage.OkButton();
         expect(await cartPage.getUrl()).to.equal("https://www.demoblaze.com/index.html");
     }).timeout(10000);
 

    after(async () => {
        await driver.quit();
    });

});