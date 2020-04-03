/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix) {
  // TODO: Implement me!
  var result = [],
    right = matrix[0].length,
    bottom = matrix.length,
    left = 0,
    top = 0;

  // create helper functions for each 90-degree CLOCKWISE direction and call subsequent 90-degree CLOCKWISE directions
  // ie: if going right, call function that goes down
  // ie: if going down, call function that goes left
  // ie: if going left, call function that goes up
  // ie: if going up, call function that goes right

  function goRight() {
    if (right === left) return;
    for (var i = left; i < right; i++) {
      result.push(matrix[top][i]);
    }
    top++;
    goDown();
  }

  function goDown() {
    if (top === bottom) return;
    for (var i = top; i < bottom; i++) {
      result.push(matrix[i][right - 1]);
    }
    right--;
    goLeft();
  }

  function goLeft() {
    if (right === left) return;
    for (var i = right - 1; i >= left; i--) result.push(matrix[bottom - 1][i]);
    bottom--;
    goUp();
  }

  function goUp() {
    if (top === bottom) return;
    for (var i = bottom - 1; i >= top; i--) result.push(matrix[i][left]);
    left++;
    goRight();
  }

  goRight();
  return result;
};
