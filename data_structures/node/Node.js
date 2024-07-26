class Node {
  // This class represents a node in a linked list
  constructor(data) {
    // Initialize the data property with the input data
    this.data = data;
    // Initialize the next property as null
    this.next = null;
  }

  // Method to set the next node in the linked list
  setNextNode(node) {
    // Check if the input node is an instance of the Node class or is null
    if (node instanceof Node || node === null) {
      // If so, set this node's next property to the input node
      this.next = node;
    } else {
      // Otherwise, throw an error indicating that the next node must be a Node instance
      throw new Error('Next node must be a member of the Node class.');
    }
  }

  // Method to get the next node in the linked list
  getNextNode() {
    // Return the value of this node's next property
    return this.next;
  }
}

class DoublyNode extends Node {
  // This class represents a node in a doubly linked list
  constructor(data) {
    super(data);
    // Initialize the previous property as null
    this.previous = null;
  }

  // Method to set the previous node in the doubly linked list
  setPreviousNode(node) {
    // Check if the input node is an instance of the Node class or is null
    if (node instanceof DoublyNode || node === null) {
      // If so, set this node's previous property to the input node
      this.previous = node;
    } else {
      // Otherwise, throw an error indicating that the previous node must be a DoublyNode instance
      throw new Error(
        'Previous node must be a member of the DoublyNode class.'
      );
    }
  }

  // Method to get the previous node in a doubly linked list
  getPreviousNode() {
    // Return the value of this node's previous property
    return this.previous;
  }
}

module.exports = { Node, DoublyNode };
