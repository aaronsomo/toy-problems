/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

// linear

// var rotatedArraySearch = function (rotated, target) {
//   if (rotated.includes(target)) {
//     for (var i = 0; i < rotated.length; i++) {
//       if (rotated[i] === target) {
//         return i;
//       }
//     }
//   }
//   return null;
// };

// logarithmic

var rotatedArraySearch = function (rotated, target) {
  var minIndex = 0;
  var maxIndex = rotated.length - 1;

  while (minIndex <= maxIndex) {
    var medianIndex = Math.floor((minIndex + maxIndex) / 2);
    if (target === rotated[medianIndex]) {
      return medianIndex;
    } else if (target < rotated[medianIndex]) {
      maxIndex = medianIndex - 1;
    } else if (target > rotated[medianIndex]) {
      minIndex = medianIndex + 1;
    }
  }

  return null;
};

// rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) // 5
rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100); // null
