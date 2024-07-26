const LinkedList = require('./LinkedList');

class Queue {
  constructor(maxSize = Infinity) {
    this.queue = new LinkedList();
    this.maxSize = maxSize;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  hasRoom() {
    return this.size < this.maxSize;
  }

  enqueue(data) {
    // throw Error on Queue overflow
    if (!this.hasRoom()) throw Error('Queue is full!');
    this.queue.addToTail(data);
    this.size++;
    console.log(`Added ${data} to queue! Queue size is now ${this.size}.`);
  }

  dequeue() {
    // Throw error on queue underflow
    if (this.isEmpty()) throw Error('Queue is empty!');
    const data = this.queue.removeHead();
    this.size--;
    console.log(`Removed ${data} from queue! Queue size is now ${this.size}.`);
    return data;
  }
}

module.exports = Queue;
