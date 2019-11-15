/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

var makeChange = function(total) {
  var coins = [1, 2, 5, 10, 20, 50, 100, 200];
  var count = 0;
  var sum = 0;
  
  function helper(sum, coins) {
    if(sum === total) {
      // console.log('total: ', total);
      // console.log('done');
      count++
    } else if (sum > total) {
      // console.log('you went over')
      makeChange(total);
    } else if (sum < total) {
      // console.log('not done');
      for (var i = 0; i < coins.length; i++) {
        // coins.splice(i, 1);
        sum = sum + coins[i];
        if (sum <= total) {
          // helper(sum, coins[i]);
          helper(sum, coins);
        }
      }
    }
  }
  helper(sum, coins);
  return count;

};

console.log(makeChange(10));

