/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.  

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

  /*
  create a storage object

  */
/**
  * Stack Class
  */
  var Stack = function() {
    this.storage = {};
    this.stackCount = 0;
    this.min = [];
  };

  // check to see if min array has a value
    // if length = 0
      // push value into min
    // if value < min[0]
      // replace value at min[0] with new value
  // add an item to the top of the stack
  // increase the size of the stack
  Stack.prototype.push = function(value) {
    if (this.min.length === 0) {
      this.min.push(value);
    } else if (value < this.min[this.min.length - 1]) {
      // this.min[this.min.length - 1] = value;
      this.min.push(value);
    }
    this.storage[this.stackCount] = value;
    this.stackCount++;
  };

  // store current top of stack into variable
  // remove item from the top of the stack
  // return variable containing value of the removed item
  // check if removed item is the min value
    // if removed item is the min value
      // remove item from min array
  // make sure to decrease the size of the stack in order to be at the top stack,
    // as we are increasing the size with every push
  Stack.prototype.pop = function() {
    this.stackCount--;
    var removed = this.storage[this.stackCount];
    delete this.storage[this.stackCount];
    if (removed === this.min[this.min.length - 1]) {
      this.min.pop();
    }
    return removed;
  };

  // return the number of items in the stack
  Stack.prototype.size = function() {
    return this.stackCount;
  };
  
  // return the minimum value in the stack
  Stack.prototype.min = function() {
    return this.min[this.min.length - 1]; // not returning single value as of time's up
  };

