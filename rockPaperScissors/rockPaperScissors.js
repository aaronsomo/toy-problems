/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function () {
  // TODO: your solution here
  /*
  things to keep in mind:
    every combination of rock/paper/scissors that a single player can make in a three-round game
        rock/paper/scissors are 3 different decisions the player can make at any ONE round per game
            3 possible decisions on the first round
            3 possible decisions on the second round
            3 possible decisions on the third round
            3 * 3 * 3 = 27 possible outcomes during ONE game

    all possible results of the game are to be stored in an array (refer to problem)

    // create an array that stores the possible results of a game
    // maybe create a variable that stores the three different decisions the player can make
    // possibly iterate over the decisions that the player can make
    // for (the number of decisions the player can make)
            // push the decision into the result array
            // result.push R/P/S into result
        ?? how do we account for the change in the decisions that the player makes??
        // possibly iterate over the decisions again for round two
            // push that decision into result array
        // possibly iterate over the decisions again for round three
            // push that decision into result array

  */
    var result = [];
    var decisions = ['rock', 'paper', 'scissors'];

    for (var i = 0; i < decisions.length; i++) {
        result.push(decisions[i]);
    }
};

