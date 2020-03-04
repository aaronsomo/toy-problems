/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */

var characterFrequency = function(string) {
  let letterObj = {};
  let letterArray = [];

  // edge case for an empty string/falsy value
  if (!string) {
    return [];
  }

  // we want to iterate over each character, so let's turn the string into an array of individual characters
  let stringArray = string.split('');

  // iterate over the string array
  // push each letter as a key into an object for storage
  // track the number of occurrences of each letter
  stringArray.forEach(letter => {
    letterObj[letter] = letterObj[letter] + 1 || 1;
  });
  // console.log(letterObj);

  // iterate over the storage object
  // push each key:value pair into the letter array with the letter as the first index and occurrence as the second
  for (let key in letterObj) {
    letterArray.push([key, letterObj[key]]);
  }
  // console.log(letterArray);

  // sort the array from highest number of occurrences to lowest
  sortedArray = letterArray.sort(function(a, b) {
    if (a[1] > b[1]) {
      return -1;
    } else if (a[1] < b[1]) {
      return 1;
    } else {
      if (a[0] > b[0]) {
        return 1;
      } else if (a[0] < b[0]) {
        return -1;
      } else {
        return 0;
      }
    }
  });

  return sortedArray;
};
