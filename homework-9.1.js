var assert = require("assert")

//assert(1 / 1 == 1, '1 / 1 does not equal 1');
// assert.equal(1, 1 / 1, '1 / 1 does not equal 1');

/*
 * four functions with two parameters:
 * - addition
 * - subtraction
 * - multiplication
 * - division
 * 
 * Must accept positive and negative Numbers (int or 
 * float) AND zero. Must not make an error!
*/
 
 /*
 *testing multiplication():
 * one | two | out
 * ===============
 * +1 | +1 | +1
 * +1 | +0 | +0
 * +1 | -1 | -1
 * -1 | -1 | +1
 * +2 | +2 | +4
 * +2 | +0 | +0
 * +2 | -2 | -4
 * -2 | -2 | +4
 * +0 | +0 | +0
 */
 
// This is a multiplication function
var multiplication = function(a, b) {
    return (a*b);
}
 // These are multiplication tests
assert.equal(1,multiplication(1,1));
assert.equal(0,multiplication(1,0));
assert.equal(-1,multiplication(1,-1));
assert.equal(1,multiplication(-1,-1));
assert.equal(4,multiplication(2,2));
assert.equal(0,multiplication(2,0));
assert.equal(-4,multiplication(2,-2));
assert.equal(4,multiplication(-2,-2));
assert.equal(0,multiplication(0,0));
 
  

 
 
