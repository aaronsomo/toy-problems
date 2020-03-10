/**
 * Implement a function that finds the longest palindrome in a given string.
 * For example, in the string "My dad is a racecar athlete", the longest
 * palindrome is "a racecar a". Count whitespaces as valid characters. Other
 * palindromes in the above string include "dad", "ete", " dad " (including
 * whitespace on each side of dad).
 */

/*
things to keep in mind:
consider white spaces in palindrome ie: "a racecar a" DOES NOT EQUAL "a racer car a"
there is no function/method to check if a string is a palindrome
    may have to implement function to handle checking for palidromes

I: string; "My dad is a racecar athlete"
O: string; "a racecar a"
C:
E: if input is not a string, return null

*/

var isPalindrome = function(string) {
  // create storage for reversed string
  var reversedString = string
    .split('') // split string input into individual characters
    .reverse() // reverse the order of the characters with native reverse() method
    .join(''); // join individual characters to form string

  // compare if reversed string is a palindrome
  return string === reversedString ? true : false; // syntactic sugar and some ternary practice
};

var longestPalindrome = function(string) {
  if (typeof string !== 'string') {
    return null;
  }

  // create a storage for possible palindrome
  // storage will be updated to new palindrome if new palindrome is longer than store
  var longest = '';

  // iterate over string input
  for (var i = 0; i < string.length; i++) {
    // check each character for a match in the rest of the string
    // need to create storage variable for current character
    var currentCharacter = string[i];
    // loop through rest of the string for matching letter, starting with one letter ahead

    for (var j = i + 1; j < string.length; j++) {
      // check if current letter j is === to currentCharacter i
      if (currentCharacter === string[j]) {
        // track index of matched letter
        // var matchedLetterIndex = j
        // slice(starting index, ending index[excluding value]) we increase to j+1 to include the letter at index j
        var word = string.slice(i, j + 1);
        // check if it's a palindrome and longer than our longest palindrome
        if (isPalindrome(word) && longest.length < word.length) {
          longest = word;
        }
      }
    }
  }
  return longest;
};
