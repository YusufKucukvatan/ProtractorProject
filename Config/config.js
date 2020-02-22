exports.config ={
    framework : "jasmine",  // name of framework
    seleniumAddress: "http://localhost:4444/wd/hub",  // remote wbe  server
    directConnect: true,

    capabilities: { browserName: "chrome" }, // runs the tast cases on given given browser

    /*
   multiCapabilities: [  // runs the same test cases on different browsers at same time
       {browserName: "chrome"},
       { browserName: "firefox" } ,
   ],
*/

    specs: ["../Specs/Spec6.js", "../Specs/Spec7.js"] , // defines the step defintiion (describe)

    /*
  suites: {
        smoke: "../Specs/Spec2.js",
        reg: "../Specs/Spec3.js",
      
     },
*/

    onPrepare: function(){   // runs before each test cases 
        browser.waitForAngularEnabled(false);  // disable the waiting time for angular
        browser.manage().timeouts().implicitlyWait(10000);   // implicity wait
        browser.manage().window().maximize();
        
        let HTMLReporter = require("protractor-beautiful-reporter");
        jasmine.getEnv().addReporter( 

            new HTMLReporter(  
                {
                    baseDirectory: "../Reports/VYTrackReports" , 
                    takeScreenShotsOnlyForFailedSpecs: true,
                    
                }
             ).getJasmine2Reporter()

         );

    }

}