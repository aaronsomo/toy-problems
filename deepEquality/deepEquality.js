/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */

/*
things to keep in mind: check if everything, including structure, between two objects are the same

I:  deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}})
    deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}})
O:  true
    false
C:  none
E:  if object is empty

iterate through first object
compare the keys and values of the first object with the second object
if value is nested
  recurse comparison

*/
var deepEquals = function(apple, orange) {

  if (typeof apple == "object" && typeof orange == "object") {
    if (apple === orange) {
      return true
    }
    if (Object.keys(apple).length === Object.keys(orange).length) {

      for (var key in apple) {
        if (orange.hasOwnProperty(key)) {
          deepEquals(apple[key], orange[key])
        }
      }

    } else {
      return false
    }
    return true
  } else {
    return false
  }

};