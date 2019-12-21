/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2'
 */

/*
  things to keep in mind: whole numbers and mixed fractions should be returned as irregular fractions

  I: 2.5
  O: 5/2
  C:
  E: if input number = 0, return 0

  multiply number by orders of 10 until modulus isn't 0 to get a whole number
  create variable to store denominator that keeps track of multiples of 10

  iterate decrementally from current `number` value and modulo `i` until 0
  check to see if `denominator` modulo `i` is 0
    if true, we found the greatest common denominator

  return STRING (number/greatest common denominator) + "/" + (denominator/greatest common denominator)
 */

var toFraction = function(number) {
  // Your code here
  var denominator = 1;
  var greatestCommonDenominator = 1;

  if (number === 0) {
    return 0;
  }

  while (num % 1 !== 0) {
    number = number * 10;
    denominator = denominator * 10;
  }

  for (var i = number; i > 0; i--) {
    if (number % i === 0) {
      if (denominator % i === 0) {
        greatestCommonDenominator = i;
        break; // callstack if no break
      }
    }
  }

  // we want to return a STRING in the form of a fraction/irregular fraction
  return (
    number / greatestCommonDenominator +
    "/" +
    denominator / greatestCommonDenominator
  );
};
