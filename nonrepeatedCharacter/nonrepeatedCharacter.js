/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

/*
things to keep in mind: there can be multiple repeating characters, return the first one

create a new storage for unique characters
  most likely an object with `character:occurrences` value-pairs to track character count
iterate over the string
  if object with a key of the current character of the given string doesn't exist
    create a property in new storage with current character as key
      set value of the character-key to 1 to track repeats/occurrences
  if object with a key of the current character of the given string exists
    increase the value of the property by 1

iterate over the new object
  if the property of the object has a value of 1 (non-repeats)
    we're going to want to store these keys in a different storage

use Object.keys() to grab the keys of the different object and set them as an array
return array[0]
*/

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  var strObj = {};
  for(var i = 0; i < string.length; i++){
    if(strObj[string[i]] === undefined){
      strObj[string[i]] = 1;
    }
    else{
      strObj[string[i]] = strObj[string[i]] + 1;
    }
  }
  var nonRepeat = {};
  for(var key in strObj){
    if(strObj[key] === 1){
      nonRepeat[key] = strObj[key];
      // console.log(nonRepeat);
    }
  }
  var keys = Object.keys(nonRepeat);
  return keys[0];
};
