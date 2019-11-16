/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

/*
things to keep in mind: combinations cannot be repeated, regardless of the order of characters

I: 'abc'
O: [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
C:
E: cannot have repeat combinations

create a storage array
we are going to recurse, so most likely create a helper function
iterate over the input string
  at each index, concat the current value into the result array
    ["", "a", "ab", "abc"]
  recurse helper function, slice the first index, so str = 'bc'
    iterate through 'bc'
      at each index, concat the current value into the result array
        ["", "a", "ab", "abc", "b", "bc"]
      recurse again, str = 'c'
        iterate
          ["", "a", "ab", "abc", "b", "bc", "c"]
  return array

*/

var powerSet = function(str) {
  var resultArray = [];
  
  function addToResult(str) {
    if(str.length === 0){
      return;
    }
    // if(resultArray.length > str.length){
    //   return;
    // }
    
    for (var i = 0; i < str.length; i++) {
      resultArray.push(str[i]);
      console.log(resultArray);
      // addToResult(str.slice(i,1));
    }
    addToResult(str.slice(0, 1));
  }
  resultArray.unshift("");

  addToResult(str);
  return resultArray;
};

powerSet("jump");
