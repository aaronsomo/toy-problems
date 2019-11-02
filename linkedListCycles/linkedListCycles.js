/*
 * Assignment: Write a function that returns true if a linked list contains a cycle, or false if it terminates somewhere
 *
 * Explanation:
 * 
 * Generally, we assume that a linked list will terminate in a null next pointer, as follows:
 *
 * A -> B -> C -> D -> E -> null
 *
 * A 'cycle' in a linked list is when traversing the list would result in visiting the same nodes over and over
 * This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:
 *
 * A -> B -> C
 *      ^    |
 *      |    v
 *      E <- D
 *
 * Example code:
 *
 * var nodeA = Node('A');
 * var nodeB = nodeA.next = Node('B');
 * var nodeC = nodeB.next = Node('C');
 * var nodeD = nodeC.next = Node('D');
 * var nodeE = nodeD.next = Node('E');
 * hasCycle(nodeA); // => false
 * nodeE.next = nodeB;
 * hasCycle(nodeA); // => true
 *
 * Constraint 1: Do this in linear time
 * Constraint 2: Do this in constant space
 * Constraint 3: Do not mutate the original nodes in any way
 */

 /*
 things to keep in mind:
 keep track of the values of each node

 create a storage for node values
 iterate over linked list
  if next node's value is not undefined
    push value into storage
      traverse down next node
      set current node to next
        if node value === any value inside of storage
          return true
        if next node is undefined
          return false

 */

var Node = function(value) {
  return { value: value, next: null };
};

var hasCycle = function(linkedList) {
  // TODO: implement me!

  var node = linkedList; // rename argument; passing linkedList as an argument is confusing
  var storage = {};
  // we can actually implement a while loop to iterate through linked list so long as linkedList.next exists
  while(node.next){
    // check if value exists
    if (storage[node.value]){
      // return true if exists
      return true;
    // if value does not exist in storage
      // create key:value property
    } else if (!storage[node.value]){
      storage[node.value] = 1; // set dummy value
    }
    // change value of current node to next node and iterate again
    node = node.next;
  }
  // when we iterate through linkedList and node.next is undefined
    // return false;
  return false;
};

// Example code:

// var nodeA = Node('A');
// var nodeB = nodeA.next = Node('B');
// var nodeC = nodeB.next = Node('C');
// var nodeD = nodeC.next = Node('D');
// var nodeE = nodeD.next = Node('E');
// hasCycle(nodeA); // => false
// nodeE.next = nodeB;
// hasCycle(nodeA); // => true