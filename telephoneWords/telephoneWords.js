/*
  * Each number key on a standard phone keypad has a set of Latin letters written on
  * it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
  *
  * Businesses often try to come up with clever ways to spell out their phone number
  * in advertisements to make it more memorable. But there are a lot of combinations!
  *
  * Write a function that takes up to four digits of a phone number, and
  * returns a list of all of the words that can be written on the phone with
  * that number. (You should return all permutations, not only English words.)
  *
  * Example:
  *   telephoneWords('2745');
  *   => ['APGJ',
  *        'APGK',
  *        'APGL',
  *        ..., // many many more of these
  *        'CSIL']
  *
  * Tips:
  *   - Phone numbers are strings! (A phone number can start with a zero.)
  *   - The digits 0 and 1 do not have letters associated with them, so they should be left as numbers.
  *   - Don't return every combination of those digits in any order, just the order given.
  *
  *  Extra credit: There's a list of English dictionary words at /usr/share/dict/words .
  *  Why not filter your results to only return words contained in that file?
  *
  */

/*
things to keep in mind: '0' and '1' do not have any letters associated with them; leave as numbers
do not return every combination of the digits in any order
  return every possible combination of the digits **in the given order**

I: '2745'
O: ['APGJ', 'APGK', 'APGL', ..., 'CSIL']
C: 
E: '0' and '1' have no associated letters; keep combinations tied to order of numbers

*/

var phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};


var telephoneWords = function(digitString) { // parameter takes in a STRING of numbers
  // TODO: return every combination that can be spelled on a phone with these digits
  /*
  create a storage array for the combinations of outputs
  identify the individual digits of the input string
    each number can have a possibility of FOUR different characters, barring 0 and 1
      maybe take each number and store the different variations of the characters it can produce
  iterate over the input string
    for every iteration, we want to grab the different possibilities of a single number and move to the next digit
      FOUR possibilities for FOUR digit input strings

  */
};


var telephoneWords = function(digitString) {
  //array to be returned
  var results = [];
  
  //get each numbers letters
  var combo1 = phoneDigitsToLetters[Number(digitString.charAt(0))];
  var combo2 = phoneDigitsToLetters[Number(digitString.charAt(1))];
  var combo3 = phoneDigitsToLetters[Number(digitString.charAt(2))];
  var combo4 = phoneDigitsToLetters[Number(digitString.charAt(3))];

  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      for (var k = 0; k < 4; k++) {
        for (var l = 0; l < 4; l++) {
          var word4 = combo1.charAt(i) + combo2.charAt(j) + combo3.charAt(k) +  combo4.charAt(l);
          if (word4.length === 4) {
            results.push(word4);
          }
        }
        var word3 = combo1.charAt(i) + combo2.charAt(j) + combo3.charAt(k);
        if (word3.length === 3) {
          results.push(word3);
        }
      }
      var word2 = combo1.charAt(i) + combo2.charAt(j);
      if (word2.length === 4) {
        results.push(word2);
      }
    }
    var word = combo1.charAt(i);
    if (word.length === 4) {
      results.push(word);
    }
  }

  //return array
  return results;
};

telephoneWords('2745');