git statuagitvar assert = require("assert");

//assert(1 + 1 == 1);
//assert.equal(1, 1 + 1 '1 + 1 does not equal 1');

/**
 * four functions with two parameters:
 * addition
 * subtraction
 * multiplication
 * division
 * 
 * Must accept positive and negative Numbers (int or
 * float) and Zero. Must not make an error!
*/

/**
 * testing division():
 * one | two | out
 * ===============
 *  +0 | +0 | +0
 *  +0 | +1 | +0
 *  +0 | -1 | +0
 *  +1 | +1 | +1
 *  +1 | -1 | -1
 *  -1 | -1 | +1
 *  +1 | +2 | +.5
 *  +1 | -2 | -.5
 *  +2 | +2 | +1
*/

//first division test
//assert( division(+0 / +0) == +0, '+0 / +0 == +0');
//test failed

//This is a division function
var division = function(a, b) {
    return (a/b);
}