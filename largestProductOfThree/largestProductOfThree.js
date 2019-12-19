/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

/*
things to keep in mind: the product of any THREE numbers should be returned.
the returned value must be the highest product of all possibilities.
numbers of the array will be multiplying by eachother

I: [2, 1, 3, 7]
O: 42
C:
E: if array contains no numbers, return null. if array length of 0, return 0.

we could sort the array using sort()
slice the three largest numbers from the array
iterate through the array
  multiply each value of the sliced AND sorted array
return value

*/

var largestProductOfThree = function(array) {
  // TODO: everything
  // find largest three numbers
  var sortedArray = array.sort((a, b) => {
    return a - b;
  });
  // console.log(sorted);
  var greatestThree = sortedArray.slice(
    sortedArray.length - 3,
    sortedArray.length
  );
  // console.log(greatestThree);
  // console.log(typeof greatestThree)
  // declare result = 1, otherwise we run into result is NaN
  var result = 1;

  // multiply each number inside of greatestThree
  greatestThree.forEach(num => {
    result = result * num;
    // console.log(typeof result)
  });

  return result;
};
