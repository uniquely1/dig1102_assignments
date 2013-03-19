var assert = require("assert")

//assert(1 / 1 == 1, '1 / 1 does not equal 1');
// assert.equal(1, 1 / 1, '1 / 1 does not equal 1');

/**
 * four functions with two parameters:
 * - addition
 * - subtraction
 * - multiplication
 * - division
 * 
 * Must accept positive and negative Numbers (int or 
 * float) AND zero. Must not make an error!
*/

/**
 * testing division();
 * one | two | out
 * ===============
 *  +1 | +1 | 1
 *   0 | +1 | 0
 *  +1 | -1 |-1
 *  +2 | +1 |+2
 *  +2 | -1 |-2
 *   0 | +2 | 0
 *  -2 | +2 |-1
 *  +2 | -2 |-1
 *  +2 | +2 |+1
 */
 
 //This is a division function
 var division = function(a, b) {
     return (a/b);
}

 //These are division tests
 assert.equal(1,division(1,1));
 assert.equal(0,division(0,1));
 assert.equal(-1,division(1,-1));
 assert.equal(2,division(2,1));
 assert.equal(-2,division(2,-1));
 assert.equal(0,division(0,2));
 assert.equal(-1,division(-2,2));
 assert.equal(-1,division(2,-2));
 assert.equal(1,division(2,2));
 