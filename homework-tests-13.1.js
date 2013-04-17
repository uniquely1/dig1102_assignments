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
 //hallway not defined
 //hallway now defined
 
 //do we have doors?
 assert(hundredDoors.hallway.doors);
 //hallway now has doors
 
 //do we have 10 doors?
 assert.equal(hundredDoors.hallway.length, 10);
 //test failed
 //yes we have 10 doors
 
 //are all the doors closed?
//hundredDoors.hallway.doors.forEach(function(door){
  //  assert.equal(door, 0);
//});
 
 
 
 