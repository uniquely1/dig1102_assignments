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
 * testing multiplication():
 * one | two | out
 * ===============
 *  +0 | +0 | +0
 *  +0 | +1 | +0
 *  +0 | -1 | +0
 *  +1 | +1 | +1
 *  +1 | -1 | -1
 *  -1 | -1 | +1
 *  +1 | +2 | +2
 *  +1 | -2 | -2
 *  +2 | +2 | +4
*/

//This is the first test
//assert(0 * 0 == +1);
// test failed

//First Multiplication funtion
var multiplication = function(a, b) {

    return (a * b);
    
};
// First test after writing code
assert( multiplication(+0, +0) == +0, '+0 * +0 == +0');
// test passed

// Refactored multiplication function 
function multiplication(a, b, c){
    return(multiplication(a, b) == c);
}
// First test after refactoring
assert(multiplication(+0, +0) == +0);
// test passed

assert(multiplication(+0, +1) == +0);
assert(multiplication(+0, -1) == +0);
assert(multiplication(+1, +1) == +1);
assert(multiplication(+1, -1) == -1);

//refactored assert function
function testMultiplication(a, b, c){
    assert(multiplication(a, b) == c );
}

//first test using refactored assert function
testMultiplication(-1, -1, '+1');
//test passed

//second test; set to fail
//testMultiplication(+1, +2, '+3');
//test failed as planned

//second test w/refactored assert;should pass
testMultiplication(+1, +2, '+2');
//test passed

testMultiplication(+1, -2, '-2');
testMultiplication(+2, +2, '+4');
