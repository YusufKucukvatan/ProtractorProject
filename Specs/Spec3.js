var actions = browser.actions();  // actions class 
var googlePage = require("../Pages/GooglePage.js");  // getting elements from googlePage
var testData = require("../Resources/TestData1.json");

describe("Test Group 3", () => {

    it("Search Apple on google website", () => {
               //input[@name="q"]
        //var SearchBox = element(by.xpath(" //input[@name='q']"));
        googlePage.SearchBox.sendKeys(testData.Item1);
        actions.sendKeys(protractor.Key.ENTER).perform();  // Hit Enter

    });
    
});