class Node {
  // This class represents a node in a linked list
    constructor(data) {
        // Initialize the data property with the input data
        this.data = data;
        // and the next property as null
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
            throw new Error("Next node must be a member of the Node class.");
        }
    }

    // Method to get the next node in the linked list
    getNextNode() {
        // Return the value of this node's next property
        return this.next;
    }
}

// we can use the node class to create links between steps in a process, for example
const firstStep = new Node("Add item to shopping cart");
const secondStep = new Node("Add delivery instructions");
const thirdStep = new Node("Add payment method");

// link nodes as steps in process
firstStep.setNextNode(secondStep);
secondStep.setNextNode(thirdStep);


// print data for linked nodes
let currentNode = firstStep;
while (currentNode) {
    // Log the current node's data
    console.log(currentNode.data);
    // Move to the next node
    currentNode = currentNode.getNextNode();
}

module.exports = Node;