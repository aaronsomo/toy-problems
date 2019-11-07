/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */

/*
things to keep in mind:
quicksort splits a given array into two different arrays and recursively sorts the two arrays
you, then, combine the two arrays and the pivot value into a single sorted array

we are going to need two separate arrays
	one array being greater than the the pivot value
	one array being less than the pivot value
the pivot value can be any random value of the given array
we might want to compare each value of the given array with the pivot value
	sort the numbers into the two arrays of whether they are greater than or less than the pivot value
	recursively sort the two arrays
	combine the arrays into a new array

I: [1, 4, 6, 3, 5]
O: [1, 3, 4, 5, 6]
C: recurse two arrays
E: values that are equal to pivot's value

*/

var quicksort = function(array) {

	var lessThan = [];
	var greaterThan = [];
	var sortedArray = [];

	var pivot = array[Math.floor(Math.random() * array.length)];

	for (var i = 0; i < array.length; i++) {
		if (array[i] <= pivot) {
			lessThan.push(array[i]);
		} else {
			greaterThan.push(array[i]);
		}
	}

	// need base case to stop
	return sortedArray.concat(quicksort(lessThan), quicksort(greaterThan)); //maximum call stack size exceeded

};
