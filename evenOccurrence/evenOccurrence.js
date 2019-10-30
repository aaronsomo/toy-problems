/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

/*
  things to keep in mind:
  handles multiple even-occurence items and returns the FIRST one
  return null is there are no even-occurence items

  create a storage to hold even-occurences in
  iterate through the input array
    if value doesn't exist in storage
      push value
        start a counter for that value
    if value already exists in storage
      increase a counter for that value
    *** may need to create object for key:value pairs
  iterate over the storage for any instances of non-even occurence values
    (ie: values that were repeated an odd number of times)
    if values have odd number of occurences
      delete them
*/
var evenOccurrence = function(arr) {
  // Your code here.
  var occurences = {};
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (!occurences[arr[i]]) {
      occurences[arr[i]] = 1;
    } else if (occurences[arr[i]]) {
      occurences[arr[i]] = occurences[arr[i]] + 1;
    }
  }
  console.log(occurences);

  for (var key in occurences) {
    if (occurences[key] % 2 !==0) {
      delete occurences[key];
    }
  }
  console.log(occurences);

  // for (var j = 0; j < arr.length; j++){
  //   return occurences[arr[j]];
  // }
  // for (var prop in occurences) {
  //   if (occurences[key]) {
  //     result.push(occurences[key])
  //   }
  // }

  var result = Object.keys(occurences);
  console.log(result);
  console.log(typeof result[0])
  
  var num;
  for (var j = 0; j < result.length; j++) {
    if (result[j]) {
      num = parseInt(result[j]);
      // console.log(typeof num);
      return num;
    }
  }

  return null;
};
