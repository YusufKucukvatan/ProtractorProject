
var VYTrackHomePage = require("../Pages/VYTrackHomePage.js");  //Elements
var actions =browser.actions();  // Actions class

describe("Test Group 7", () => {
    
    it("Mouse hover to Fleet", () => {
        actions.mouseMove(VYTrackHomePage.Fleet).perform();
        browser.sleep(3000);
    });

    it("Click Vehicles", () =>{
        VYTrackHomePage.Vehicles.click();
        browser.sleep(3000);
    });

});