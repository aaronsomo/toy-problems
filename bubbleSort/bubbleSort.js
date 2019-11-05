/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Feel free to add helper functions if needed.


var bubbleSort = function(array) {
  // Your code here.
  /*
  things to keep in mind: we will most likely be iterating two times
    first time to iterate over the entire length of the array
    second time to iterate over two adjacent indices within the array

  maybe create a storage array for the sorted result
  iterate over the length of the input array
    inside the input array, iterate over length of the array
      position the numbers in a way that the values are ascending numerical order
      if index[0] is greater than index[1]
        swap positions (may need to create temporary storage variables)
          increase index count and compare next two indices (for example index[1] and index[2]) until end of array
  return array

  */

  for(var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      var tempOne = array[j];
      var tempTwo = array[j + 1];

      if (tempOne > tempTwo) {
        array[j] = tempTwo;
        array[j +1] = tempOne;
      }
    }
  }
return array;
};

// bubbleSort([2, 1, 3]); // yields [1, 2, 3]