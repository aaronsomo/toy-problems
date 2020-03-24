/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *   longestRun("")       // null
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */
/*
things to keep in mind:
tracking the start and end INDICES of the longest repetitive character
return the first instance of same streak characters
will most likely need a temporary storage

I: string
O: array
C:
E: return [0.0] if input string is null or undefined

*/

var longestRun = function(string) {
  // TODO: Your code here!
  var result = [0, 0];
  var longest = 0; // store longest run/streak/character repetion
  var counter = 0; // track longest run/streak/character repetition
  var tempIndices;
  var start = true;

  // edge case
  if (string.length === 0 || string.length === undefined) {
    return [0, 0];
  } else {
    // we want to start iterating through the string starting from the second index
    for (var i = 1; i < string.length; i++) {
      // because we started at the second index, we can compare to the value of the prior index
      if (string[i - 1] === string[i]) {
        // if the current index === to the prior index, increase the counter
        counter++;
        // need to track the starting index of a character
        // once we start tracking the run/streak, we reset temporary indices as
        // [prior index, current index] and init start to false
        // toggling start to false will break us out of resetting temporary indices
        if (start) {
          // reset temporary indices to [prior index, current index]
          tempIndices = [i - 1, i];
          // toggle start to false because we have started tracking temporary indices
          start = false;
        } else {
          // when start is toggled to false, we prevent resetting tempIndices
          // we are only interested in the ENDING index, so as we iterate, tempIndices[1] should keep getting replaced
          tempIndices[1] = i;
        }
        // after iterating through a run/streak, check and replace longest with counter
        if (counter > longest) {
          longest = counter;
          // store current result as tempIndices
          result = tempIndices;
        }
      } else {
        // reset counter and start when subsequent letters do not match
        counter = 0;
        start = true;
      }
    }
    return result;
  }
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function(len) {
  var text = '';
  var possible = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};
