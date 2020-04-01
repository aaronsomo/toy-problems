/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
  if (typeof n !== 'number' || n < 1 || n % 1 !== 0) {
    // n isn't a number or n is less than 1 or n is not an integer
    return false;
  }
  // TODO: return true if n is prime, false otherwise
  // create a variable that divides by 2 to see if prime
  let divisor = 2;
  // while divisor is less than n
  while (divisor < n) {
    // check if there is a remainder for n / divisor
    if (n % divisor) {
      // if true, increment divisor by one
      divisor++;
    } else {
      // if false, return false
      return false;
    }
  }
  // after loop completes, return true
  return true;
};

/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

var primeSieve = function(start, end) {
  // set result to empty array
  let result = [];
  // iterate from start to end
  for (var i = start; i <= end; i++) {
    // test if current number is prime
    if (primeTester(i)) {
      // if true, push to result
      result.push(i);
    }
  }
  // return result
  return result;
};
