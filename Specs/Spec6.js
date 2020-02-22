var VyTrackJson = require("../Resources/VYTrack.json");  // jSon
var VYTrackLogInPage = require("../Pages/VYTrackLogInPage.js"); // log in paage elemnts


describe("Test Group 6", () => {
    
    it("Log Into VyTrack application", () => {
        browser.get(VyTrackJson.URL);
        browser.sleep(3000);

    });
     
    it("Enter credentials", () => {
        VYTrackLogInPage.UserName.sendKeys(VyTrackJson.UserName);
        browser.sleep(3000);
        VYTrackLogInPage.PassWord.sendKeys(VyTrackJson.PassWord);
        browser.sleep(3000);
       

    });

    it("Click LogIn", () => {
        VYTrackLogInPage.LogInButton.click();
        browser.sleep(3000);
    });


});