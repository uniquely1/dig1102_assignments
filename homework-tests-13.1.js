var assert = require("assert"),
    hundredDoors = require("./homework-code-13.1.js");
    
    
 /**
 * test: do we have a hallway?
 * test: do we have doors in our hallway?
 * test: do we have 100 doors?
 * test: are all the doors closed?
 * do: PASS 1 -- take a walk down the hallway, change the state of the doors
 * test: are all the doors open?
 * do: PASS 2 -- take a walk down the hallway, change the state of the doors
 * test: is every EVEN door closed? is every ODD door open?
 * do: PASS 3 -- take a walk down the hallway, change the state of the doors
 * test: does the hallway match our expected hallway state?
 */
 
 //do we have a hallway?
 assert(hundredDoors.hallway);
 //hallway undefined
 //hallway now defined
 
 //do we have doors in our hallway?
 assert(hundredDoors.hallway.doors);
 //doors not defined
 //doors now defined
 
 //do we have 10 doors?
 assert.equal(hundredDoors.hallway.doors.length, 10);
 //we don't have 10 doors yet
 //we now have 10 doors
 
 //are all the doors closed?
 hundredDoors.hallway.doors.forEach(function(door){
            assert.equal(door, 0);
});
//doors are all closed


 
 
 