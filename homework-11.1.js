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
 assert( multiplication(+0, +0) == +1, '+0 * +0 == +1');
 
