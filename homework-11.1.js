var assert = require("assert");

/**
 * four functions with two parameters
 * addition
 * subtraction
 * multiplication
 * division
 * 
 * Must accept positive and negative numbers (int and float)
 * and zero. Must not return an error!
 */
 
 /**
  * testing multiplication():
  * one | two | out
  * +0 | +0 | +0
  * +0 | +1 | +0
  * +0 | -1 | +0
  * +1 | +1 | +1
  * +1 | -1 | -1
  * +1 | +2 | +2
  * -1 | -2 | +2
  * +2 | +2 | +4
  * -2 | +2 | -4
  */
  
 //first multiplication test
 //assert( multiplication(+0, +0) == +1, '+0 * +0 == +1');
 // test failed
 
 // multiplication function
//function multiplication(a, b){
//    return (+0);
//}
//first test after writing function
assert( multiplication(+0, +0) == +0, '+0 * +0 == +0');
assert( multiplication(+0, +1) == +0, '+0 * +1 == +0');
assert( multiplication(+0, -1) == +0, '+0 * -1 == +0');
assert( multiplication(+1, +1) == +1, '+1 * +1 == +1');
//first three tests passed; last test failed; need to refactor function to get a 
//passing test

//refactored multiplication test
function multiplication(a, b){
    if (a || b == +0) return +0;
    if (a == +1) return +1;
}

