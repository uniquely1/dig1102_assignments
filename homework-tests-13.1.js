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
assert( hundredDoors.hallway );
//hallway not defined
//hallway now defined

//do we have doors in our hallway?
assert( hundredDoors.hallway.doors);
//we have doors

//do we have 10 doors?
assert.equal(hundredDoors.hallway.doors.length, 10);
//yes we have 10 doors in our list

//are all the doors closed?
hundredDoors.hallway.doors.forEach(function(door){
    assert.equal(door, 0);
});
//yes all the doors are closed

//can we change the state of a door? do we have a toggle function?
assert(hundredDoors.hallway.toggle);
//we can toggle a door in the hallway

//can we change a door state from closed to open?
assert(hundredDoors.hallway.toggle(0) === 1);
//yes we can change the state of a door.



 
 
 