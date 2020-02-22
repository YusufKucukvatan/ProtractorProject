describe( "Test Group 1" , function() {    
    beforeAll( function()  {   
        console.log("Test Group 1 started");
       });

    beforeEach(function(){  
        console.log("Test case started");
      });

    it("Test Case 1", function(){ 
        console.log("Test Case 1 Completed");

     });


     it("Test Case 2", function(){ 
        console.log("Test Case 2 Completed");
        
    });

    afterEach( function(){
        console.log("Test Case ended");
    });

    afterAll( function() {  
        console.log("Test Group 1 finished");
      }); 

});