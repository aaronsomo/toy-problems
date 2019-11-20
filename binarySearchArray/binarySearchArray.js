/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

/*
things to keep in mind: arrays are pre-sorted;
binary search tree works by using conditional statements: if > or <

I: var index = binarySearch([1, 2, 3, 4, 5], 4);
O: 3
C: binary search is log(n) time complexity
E: when collection is empty, when no element is specified, when the given element does not exist in the collection

binary searches divide subsequent searches in half via `if > or <` conditions

find the middle of the array and compare it to the target's value
if target is greater than middle value
  split array -> remove all values less than middle value
    find new middle value of reduced array (recursive case)
if target is less than middle value
  split array -> remove all values greater than middle value
    find new middle value of reduced array (recursive case)
recurse

base case??

*/

var binarySearch = function (array, target) {

  // need to store index
  // var helper = function(array, target) {
    var middle = Math.floor(array.length/2)
    if (array.length < 1) {
      return;
    }

    if (array[middle] === target) {
      return middle;
    }

    if (array[middle] > target) {
      return binarySearch(array.slice(0,middle), target);
    } else {
      return binarySearch(array.slice(middle + 1), target);
    }
  // }
};


var index = binarySearch([1, 2, 3, 4, 5], 4);
console.log(index); // 3