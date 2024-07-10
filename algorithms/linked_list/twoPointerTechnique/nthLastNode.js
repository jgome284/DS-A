const LinkedList = require('../../../data_structures/LinkedList.js');
const testLinkedList = require('./testLinkedList.js');
// Complete this function
const nthLastNode = ( linkedList, n) => {
  // set a leading point that moves down the list until it hits null
  let leadingPointer = linkedList.head
  // initialize trailing pointer to null
  let trailingPointer = null
  // initialize a counter to check spacing between leading and laging pointers
  let counter = 0
  // move leadingPointer until it hits end of list
  while (leadingPointer) {
    leadingPointer = leadingPointer.getNextNode()
    // once the counter hits spacing between leading and trailing pointers
    if (counter >= n ) {
      // move trailingPointer down linked list
      // if trailing point is null, initialize value to head of list
      if (!trailingPointer) {
        trailingPointer = linkedList.head
      }
      // otherwise, just keep it moving down the list
      trailingPointer = trailingPointer.getNextNode()
    }
    counter++
  }
  // return the trailingPointer when end is found
  return trailingPointer
  
  // function should return null if the length list exceeds the n
};

// Test your function yourself:
console.log(nthLastNode(testLinkedList, 4));

// Leave this so that we can test your code:
module.exports = nthLastNode;
