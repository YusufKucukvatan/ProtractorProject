// only goes to amazon
var AmazonJson = require("../Resources/AmazonJson.json");   

describe('Test Group 4', () => {
     
    it("Go to amazon", () => {
        browser.get(AmazonJson.URL)
    });
    

});