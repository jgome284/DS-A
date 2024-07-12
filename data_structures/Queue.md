# Queues

## Concept

A queue is a collection of data arranged in a particular order. While queues can be implemented using various data structures, a singly linked list is one of the more common methods. Queues follow the First In, First Out (FIFO) principle.

Queues support three primary operations:

- **Enqueue**: adds data to the rear or end of the queue
- **Dequeue**: retrieves and removes data from the front or beginning of the queue
- **Peek**: reveals data from the front without removing it

## Use Case

The queue data structure is similar to a physical line of people waiting for a service, like buying movie tickets. Each person in line has a name (the data). The first person to join the line (enqueue) is both at the front and back of the line. As new people join the line (enqueue), they form the new back of the line.

When it's the person's turn to be served (dequeued), the cashier serves them from the front of the line (or the line wouldn't be fair!). After serving, the person leaves the line.

If the cashier only wants to know who's next in line, they can peek at their name without removing them from the queue.

The first person in line is the first to be served.

## Implementation

A queue can be built using a linked list, with the front of the queue corresponding to the list's head and the back of the queue corresponding to the tail. As queue operations are limited to the front and back, no traversal or modification of intermediate nodes in the linked list is permitted.

To access both ends of the queue, references to both the head and tail nodes are required. Additionally, if a queue has a fixed data capacity, it is considered a bounded queue.

Just as stacks, inserting data into a full queue will cause a queue overflow, and removing data from an empty queue will result in an **queue underflow**.
