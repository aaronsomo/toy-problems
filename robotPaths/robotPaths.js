/**
 *
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the
 *  bottom right corner. The robot can move either up, down, left, or right,
 *  but cannot visit the same spot twice. How many possible unique paths are
 *  there to the bottom right corner?
 *
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

// var makeBoard = function(n) {
//   var board = [];
//   for (var i = 0; i < n; i++) {
//     board.push([]);
//     for (var j = 0; j < n; j++) {
//       board[i].push(false);
//     }
//   }
//   board.togglePiece = function(i, j) {
//     this[i][j] = !this[i][j];
//   };
//   board.hasBeenVisited = function(i, j) {
//     return !!this[i][j];
//   };
//   return board;
// };

// var robotPaths = function(n, board, i, j) {
// };

const makeBoard = (n) => {
  const board = [];
  for (let i = 0; i < n; i++) {
    board.push([]);
    for (let j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function (i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function (i, j) {
    return !!this[i][j];
  };
  return board;
};

const robotPaths = (n) => {
  //Create a new board using makeBoard
  //Initialize a variable 'paths' to keep track of the number of unique paths

  let paths = 0;
  let board = makeBoard(n);

  //Example of a fresh 3x3 board:
  /*
    [
      [false, false, false],
      [false, false, false],
      [false, false, false]
    ]  
  */

  //recursive function
  const findPaths = (i, j) => {
    //'i' is the row we are on
    //'j' is the column we are on

    //should return number greater than 0.
    //This performe the check if n = 0
    if (i === n - 1 && j === n - 1) {
      paths++;
      return;
    }

    //If at any point we run off the grid, return
    //Example would be to try accessing a 4th column or 4th row in a 3x3 board

    if (i < 0 || j < 0) return;
    if (i >= n || j >= n) return;

    //If this position has already been visited, return
    if (board.hasBeenVisited(i, j)) {
      return;
    } else {
      //we will toggle the current piece
      //and move forward by checking each piece adjacent to the current piece
      board.togglePiece(i, j);
      //Check the current row next column
      findPaths(i, j + 1);
      //Check the next row same column
      findPaths(i + 1, j);
      //Check the current row previous column
      findPaths(i, j - 1);
      //Check the previous row same column
      findPaths(i - 1, j);
      //piece back to avoid future conflicts
      board.togglePiece(i, j);
    }
  };
  //Begin the first recursive call on the first column in the first row
  findPaths(0, 0);
  //Return the total amount of unique solutions
  return paths;
};
module.exports = { robotPaths };
