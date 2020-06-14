/**
 * Write a stack using your preferred instantiation pattern.
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

// /**
//   * Stack Class
//   */
// var Stack = function() {

//   // add an item to the top of the stack
//   this.push = function() {
//   };

//   // remove an item from the top of the stack
//   this.pop = function() {
//   };

//   // return the number of items in the stack
//   this.size = function() {
//   };
// };

// /**
//   * Queue Class
//   */
// var Queue = function() {
//   // Use two `stack` instances to implement your `queue` Class
//   var inbox = new Stack();
//   var outbox = new Stack();

//   // called to add an item to the `queue`
//   this.enqueue = function() {
//     // TODO: implement `enqueue`
//   };

//   // called to remove an item from the `queue`
//   this.dequeue = function() {
//     // TODO: implement `dequeue`
//   };

//   // should return the number of items in the queue
//   this.size = function() {
//     // TODO: implement `size`
//   };
// };

var Stack = function () {
  this.storage = [];
  this.size = 0;
};

Stack.prototype.push = function (value) {
  this.storage[this.size] = value;
  this.size++;
};

Stack.prototype.pop = function () {
  this.storage.splice(this.size - 1, 1);
  this.size--;
};

Stack.prototype.size = function () {
  return this.size;
};

/**
 * Queue Class
 */
var Queue = function () {
  // Use two `stack` instances to implement your `queue` Class
  this.inbox = new Stack();
  this.outbox = new Stack();

  // called to add an item to the `queue`
  this.enqueue = function (storage, value) {
    // TODO: implement `enqueue`
    if (storage === 'inbox') {
      this.inbox.storage.push(value);
      this.inbox.size++;
    } else if (storage === 'outbox') {
      this.outbox.storage.push(value);
      this.outbox.size++;
    }
  };

  // called to remove an item from the `queue`
  this.dequeue = function (storage) {
    // TODO: implement `dequeue`
    if (storage === 'inbox') {
      this.inbox.storage.splice(0, 1);
      this.inbox.size--;
    } else if (storage === 'outbox') {
      this.outbox.storage.splice(0, 1);
      this.outbox.size--;
    }
  };

  // should return the number of items in the queue
  this.size = function (storage) {
    // TODO: implement `size`
    if (storage === 'inbox') {
      return this.inbox.size;
    } else if (storage === 'outbox') {
      return this.outbox.size;
    }
  };
};

var q = new Queue();
q.enqueue('inbox', 1);
q.enqueue('inbox', 2);
q.enqueue('inbox', 3);
q.enqueue('outbox', 'A');
q.enqueue('outbox', 'B');
q.enqueue('outbox', 'C');
//console.log(q.inbox);
//console.log(q.outbox);
q.dequeue('inbox');
q.dequeue('outbox');
q.dequeue('outbox');
console.log(q);
q.size('inbox');
q.size('outbox');
