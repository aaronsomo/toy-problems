/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

/*
things to keep in mind: output all of the different combinations of strings when given an input string
strings do not have to be real words
strings can be repeated

create a storage array
practice and attempt solution with helper function/recursion
  iterate over the input string
    grab current letter
    substring the rest of the input
    grab another letter
    possibly recurse over leftover letters
      return concat

*/
var allAnagrams = function(string) {
  // Your code here.
  var combinations = [];
  if (string.length < 1) {
    return;
  }
  for (var i = 0; i < string.length; i++) {
    var letter = string[i];
    var partialString = string.substring(0, i);
    // var partialString = string.substring(i + 1, )
    var possibleCombo = allAnagrams(partialString);
    for (var j = 0; j < partialString.length; j++) {
      combinations.push(letter + possibleCombo[j]);
    }
  }
  return combinations;
};
