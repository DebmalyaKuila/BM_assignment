const { Builder, By, Key } = require("selenium-webdriver")
const chrome = require('selenium-webdriver/chrome');
const { twitterLoginUrl } = require("./constants")
const dotenv = require('dotenv');
dotenv.config();


async function topTrends() {

    //launch the web browser in headless mode
    const options = new chrome.Options();
    options.addArguments('--headless=new');

    const driver = new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    await driver.manage().setTimeouts({ implicit: 3000 })

    // open login page in chrome
    await driver.get(twitterLoginUrl);

    await driver.manage().setTimeouts({ implicit: 5000 });

    const usernameInput = await driver.findElement(By.className('r-30o5oe'));
    await usernameInput.sendKeys(process.env.TWITTER_USERNAME);

    const nextBtn1 = await driver.findElement(By.xpath('//*[@id="layers"]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div/div/div/button[2]'));
    await nextBtn1.click();

    const passwordInput = await driver.findElement(By.xpath('//*[@id="layers"]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[1]/div/div/div[3]/div/label/div/div[2]/div[1]/input'));
    await passwordInput.sendKeys(process.env.TWITTER_PASSWORD);

    const loginBtn = await driver.findElement(By.css('button[data-testid="LoginForm_Login_Button"]'));
    await loginBtn.click();

    // now go to trandings page and fetch top 5 posts
    await new Promise(resolve => setTimeout(resolve, 3000));

    const allSectionElements = await driver.findElements(By.css('div[data-testid="trend"]'));

    const topTrends = [];
    for (let i = 0; i < allSectionElements.length && topTrends.length < 5; i++) {
        const trend = await allSectionElements[i].findElement(By.xpath('.//div/div[2]/span'));
        const text = await trend.getAttribute('innerText');
        topTrends.push(text);
    }

    const nameOfTrends = {
        nameoftrend1: topTrends[0],
        nameoftrend2: topTrends[1],
        nameoftrend3: topTrends[2],
        nameoftrend4: topTrends[3],
        nameoftrend5: topTrends[4],
        timestamp: new Date()
      };

    await driver.quit();

    //return top trends in twitter
    return nameOfTrends

}

module.exports={
    topTrends
}