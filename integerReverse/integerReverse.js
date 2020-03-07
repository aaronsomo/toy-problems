/* 
* 
* Integer Reverse
* 
* Given a positive integer, return its digits reversed. 
* 
* - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY. 
* - Only use integers and math in your solution.
*
things to keep in mind: reverse the order of the numbers

I: 123
O: 321
C:
E: if input is negative, return null. if input is 0, return 0.

create reverse number variable
find a way to isolate each number
  do not convert input into an array
    use math to isolate individual numbers

*/

// DO NOT CONVERT TO STRING

function reverseInteger(number) {
  // TODO: Implement this function!

  if (number < 0) {
    return null;
  }

  if (number === 0) {
    return 0;
  }

  // var reverse = number;
  var reverse = 0;

  while (number !== 0) {
    var endDigit = number % 10;

    reverse = reverse * 10;
    reverse = reverse + endDigit;
    number = number - endDigit;
    number = number / 10;
  }

  return reverse;
}
