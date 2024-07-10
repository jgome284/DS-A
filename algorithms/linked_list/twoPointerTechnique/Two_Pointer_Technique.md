# Two-Pointer Linked List Techniques

Learn how to approach Linked List problems with multiple iterator pointers.

Many common singly linked list problems can be solved by iterating with two pointers. This is sometimes known as the **runner technique**.

# Nth Last (Two Pointers Moving in Parallel)

Consider the following problem:

Create a function that returns the nth last element of a singly linked list.

In order to do this, you’ll need some way of knowing how far you are from the end of the list itself. However, in a singly linked list, there’s no easy way to iterate back through the list when you find the end.

## Approaches

One thing that might first come to mind is to use an array to store a representation of the linked list. While this approach results in an easy-to-read implementation, it could also use up lots of memory maintaining a dual representation of the same data. If the linked list has one million nodes, we’ll need one million pointers in an array to keep track of it! An approach like this results in an extra O(n) space being allocated.

```Javascript
const arrayNthLast = (list, n) => {
  const linkedListArray = [];
  let currentNode = list.removeHead();
  while (currentNode) {
    linkedListArray.push(currentNode);
    currentNode = currentNode.getNextNode();
  }
  return linkedListArray[linkedListArray.length - n];
}
```

Instead of creating an entire parallel list, we can solve this problem by using two pointers at different positions in the list but moving at the same rate. As in the previous example, we will use one pointer to iterate through the entire list, but we’ll also move a second pointer delayed n steps behind the first one.

```
nthLastNodePointer = null
tailPointer = linked list head
count = 0

while tail pointer exists
  move tail pointer forward
  if count >= n
    set nthLastNodePointer to head if it's still null or move it forward
  increment count

return nthLastNodePointer
```

## Solution

In JavaScript, we could implement the nth-last-node-finder function as such:

```Javascript
const nthLastNode = (linkedList, n) => {
  let current = null;
  let tailSeeker = linkedList.head;
  let count = 0;
  while (tailSeeker) {
    tailSeeker = tailSeeker.next;
    if (count >= n) {
      if (!current) {
        current = linkedList.head;
      }
      current = current.next;
    }
    count++
  }
  return current;
}
```

The exact variable names aren’t important, and the internal implementation could be written in a number of ways, but the important part is that we are able to complete this problem efficiently–in O(n) time (we must iterate through the entire list once), and O(1) space complexity (we always use only three variables no matter what size the list is: two pointers and a counter).
