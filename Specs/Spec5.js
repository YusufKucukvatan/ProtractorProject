// search apple on amazon without going to amaon web
var amazonPage = require("../Pages/AmazonPage.js"); // elemnts
var testData = require("../Resources/TestData1.json"); //Json file
var actions = browser.actions();

describe("Test Group 5", () => {

    it("Search for apple on Amazon", () => {
        amazonPage.SearchBox.sendKeys(testData.Item1);
        actions.sendKeys(protractor.Key.ENTER).perform();  // Hit Enter

    });
    
});