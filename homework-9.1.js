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
 * testing subtraction
 * one | two | out
 * ===============
 * +1 | +1 | +0
 * +1 | +0 | +1
 * +1 | -1 | +2
 * -1 | +1 | -2
 * -1 | +0 | -1
 * +2 | +1 | +1
 * +2 | +0 | +2
 * +2 | -1 | +3
 * +2 | +1 | +1
 */
 
 // This is a subtraction function
 var subtraction = function(a,b){
     return (a-b)
}

assert.equal(0,subtraction(1,1));
assert.equal(1,subtraction(1,0));
assert.equal(2,subtraction(1,-1));
assert.equal(-2,subtraction(-1,1));
assert.equal(-1,subtraction(-1,0));
assert.equal(1,subtraction(2,1));
assert.equal(2,subtraction(2,0));
assert.equal(3,subtraction(2,-1));
assert.equal(1,subtraction(2,1));



 
 
