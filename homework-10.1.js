var assert = require("assert");

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
 * testing subtraction():
 * one | two | out
 * ===============
 *  +0 | +0 | +0
 *  +0 | +1 | -1
 *  +0 | -1 | +1
 *  +1 | +1 | +0
 *  +1 | -1 | +2
 *  -1 | -1 | +0
 *  +1 | +2 | -1
 *  +1 | -2 | +3
 *  +2 | +2 | +0
*/

//first test
assert( subtraction(+0, +0) == +0, '+0 - +0 == +0');
//test failed

//subtraction function
function subtraction(a, b){
    return (a - b);
}
// first test passed after function written

assert( subtraction(+0, +1) == -1, '+0 - +1 == -1');
assert( subtraction(+0, -1) == +1, '+0 - -1 == +1');
assert( subtraction(+1, +1) == +0, '+1 - +1 == +0');

