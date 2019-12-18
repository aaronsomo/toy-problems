/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

/*
things to keep in mind: if a smaller numeral is placed in front of a larger numeral, it is subtracted
return 'null' if the input is not a string

I: roman numeral string
O: number
C: 
E: return 'null' if the input is not a string

create storage array for translated string into numbers
iterate through string
  push letter's corresponding value into storage array

create variable for first index of storage array, call it smaller
create variable for total sum and also set equal to value of first index of storage array

iterate through storage array
  if `smaller` is less than current index
    subtract `total` from value of current index
    change value of `smaller` to value of current index
  if `smaller` is greater than current index
    add `total` to value of current index
    change value of `smaller` to value of current index

return `total`


*/

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral) {
  // TODO: Implement me!
  var numbers = [];
  if (typeof romanNumeral !== "string") {
    return null;
  }

  for (var i = 0; i < romanNumeral.length; i++) {
    for (var roman in DIGIT_VALUES) {
      if (roman === romanNumeral.charAt(i)) {
        numbers.push(DIGIT_VALUES[roman]);
      }
    }
  }
  console.log(numbers);
  var smaller = numbers[0];
  var total = numbers[0];

  for (var i = 1; i < numbers.length; i++) {
    if (smaller < numbers[i]) {
      total = Math.abs(total - numbers[i]);
      smaller = numbers[i];
    } else {
      total = numbers[i] + total;
      smaller = numbers[i];
    }
  }
  return total;
};
