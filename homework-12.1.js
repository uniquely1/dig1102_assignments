var assert = require("assert");

/**
 * Imagine a hallway with 100 doors. All of them are closed.
 * Take a walk down the hallway. Open every door.
 * Take another walk down the hallway. Close every other door.
 * Take another walk down the hallway. Examine every third door, if the door is open, close it. If it is closed, open it.
 * On the fourth pass of the hallway, examine every fourth door. If the door is open, close it. If it is closed, open it.
 * Repeat in kind for 100 passes of the hallway.
 * What is the state of the hallway?
 * 
 * A Hallway has:
 *  - a list of Number 1 (open) or 0 (closed): doors (Array)
 *  - a method of changing the state of a single door: toggle (Function)
 *  - a method of walking down the hallway to change the state: pass (Function)
 *      - example: on 10th pass(), toggle() every 10th item in doors
 *      - psuedo: on Nth pass(), toggle() every Nth item in doors
 *  - the number of the passes taken so far: passes (Number) = 0
 *  - a method of walking down the hallway for 100 passes: allPasses (Function)
 */
 
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

//define hallway
var hallway = [];

//define hallway doors
var hallwayDoors = [];



//hallway test
assert(hallway);
//test failed; hallway not defined
//test passed with hallway defined

//test for hallway doors
assert(hallwayDoors);
//test failed; hallwayDoors not defined
//test passed; hallwayDoors defined

//test for 100 doors
assert( hallwayDoors.length = 100, 'hallwayDoors.length = [100]');
//test for 100 doors passed