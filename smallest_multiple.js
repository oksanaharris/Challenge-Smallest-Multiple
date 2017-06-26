/*jshint esversion: 6*/
/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
module.exports = function( ceiling ) {
  // do work here

  var arr = [];
  for (let i = ceiling; i > 0; i--){
    arr.push(i);
  }

  var startProduct = 1;
  for (let i = arr.length - 1; i > arr.length - 5; i-- ){
    startProduct *= i;
  }

  var smallestMultiple = startProduct;
  var passed = false;
    
  for (let j = startProduct; j > 0; j--){
    for (let k = 0; k < arr.length; k++){
      if (j % Number(arr[k]) === 0){
        passed = true;
      } else {
        passed = false;
        break;
      }
    }
    if (passed === true){
      smallestMultiple = j;
    }
  }
  
  return smallestMultiple;
};