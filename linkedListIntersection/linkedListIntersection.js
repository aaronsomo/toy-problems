/*
 *
 * Linked List Intersection
 *
 * Write a function linkedListIntersection that returns the node
 * at which the intersection of two linked lists begins,
 * or null if there is no such intersection.
 *
 * Example:
 *
 * Given the following two linked lists list1 and list2,
 * linkedListIntersection(list1,list2) should return D
 * as the node of intersection.
 *
 *    A → B → C
 *             ↘
 *               D → E → F
 *             ↗
 *        X → Y
 *
 * Given the following two linked lists list1 and list2,
 * linkedListIntersection(list1,list2) should return NULL
 * as there is no point of intersection.
 *
 *    A → B → C → D
 *    X → Y → Z
 *
 */

/*

things to keep in mind:
return NULL if there is no point of intersection
we are given function Node()
when dealing with linkedlists, we don't necessarily look at the whole list,
  but rather, each individual node and subsequent "next" nodes

I: two linked lists
O: a single value or null
C: 
E: if either linked lists are undefined, return null. if there are no intersections, return null.

*/

// Helper function (do not edit)
function Node(val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}

function linkedListIntersection(list1node, list2node) {
  // TODO: Implement this function!
  storage = {}; // we can implement an array as well

  // iterate through list1's nodes STARTING with the very first node
  // traverse down list1, creating a key:value pair for storage to reference in list2
  while (list1node.next !== null) {
    // assign the value of list1node to the next node down the linkedlist
    list1node = list1node.next;
    storage[list1node.value] = true;
  }

  // don't need to set a condition for list2node.next because we are interested in list2's current node
  while (list2node !== null) {
    if (storage[list2node]) {
      return list2node;
    }

    // traverse down list2 linkedlist
    list2node = list2node.next;
  }
  // return null after iterating through both lists and finding no matching nodes
  return null;
}
