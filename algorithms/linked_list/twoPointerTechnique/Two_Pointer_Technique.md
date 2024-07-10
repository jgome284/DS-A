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

# Find Middle (Pointers at Different Speeds)

Another two-pointer technique involves sending pointers through the list at different iteration “speeds”.

Consider this problem:

Find the middle node of a linked list.

## Approaches

As before, it’s possible to find a solution by iterating through the entire list, creating an array representation, and then returning the middle index. But as before, this potentially takes up lots of extra space:

```
create array
while the linked list has not been fully iterated through
  push the current element onto array
  move forward one node
return array[length / 2]
```

Instead, we can use two pointers to move through the list. The first pointer takes two steps through the list for every one step that the second takes, so it iterates twice as fast.

```
fastPointer = list head
slowPointer = list head
while fastPointer is not null
  move fastPointer forward
  if the end of the list has not been reached
    move fastPointer forward again
    move slowPointer forward
return slowPointer
```

When the first pointer reaches the end of the list, the “slower” second pointer will be pointing to the middle element. Let’s visualize the steps of the algorithm:

Starting State

```
F
S
1  2  3  4  5  6  7
```

First Tick

```
      F
   S
1  2  3  4  5  6  7
```

Second Tick

```
            F
      S
1  2  3  4  5  6  7
```

Third Tick

```
                  F
         S
1  2  3  4  5  6  7
```

Final Tick

```
                     F
         S
1  2  3  4  5  6  7  null
```

As long as we always move the fast pointer first and check to see that it is not null before moving it and the slow pointer again, we’ll exit iteration at the proper time and have a reference to the middle node with the slow pointer.

## Solutions

### 2x Speed

```Javascript
const findMiddle = linkedList => {
  let fast = linkedList.head;
  let slow = linkedList.head;

  // As long as the end of the list is not reached
  while (fast !== null) {
    // Move the fast pointer at least one step
    fast = fast.getNextNode();
    // If it isn't at the end of the list
    if (fast !== null) {
      // Move both pointers forward once
      fast = fast.getNextNode();
      slow = slow.getNextNode();
    }
  }
  // At this point, the slow pointer is in the middle
  return slow;
};
```

As with the nth-to-last solution, this solution has O(n) time complexity, and O(1) space complexity, since only two nodes are created no matter the size of the input list.

### Half-Speed

Another equally valid solution is to move the fast pointer once with each loop iteration but only move the slow pointer every-other iteration.

```Javascript
const findMiddleAlternate = linkedList => {
  let count = 0;
  let fast = linkedList.head;
  let slow = linkedList.head;

  while(fast !== null) {
    fast = fast.getNextNode();
    if (count % 2 !== 0) {
      slow = slow.getNextNode();
    }
    count++;
  }
  return slow;
}
```
