const { Node } = require('./Node.js');

// Example of Nodes
console.log(
  '\nNode Example: \nWe can use the Node class to create links between steps in a process'
);
const firstStep = new Node('1. Add item to shopping cart');
console.log(`\ninitialized first step node: \n${firstStep.data}`);
const secondStep = new Node('2. Add delivery instructions');
console.log(`\ninitialized second step node: \n${secondStep.data}`);
const thirdStep = new Node('3. Add payment method');
console.log(`\ninitialized third step node: \n${thirdStep.data}`);

// link nodes as steps in process
console.log(`\nlinking nodes...\n`);
firstStep.setNextNode(secondStep);
secondStep.setNextNode(thirdStep);

// print data for linked nodes
console.log('\nPrinting data for linked nodes...\n');
let currentNode = firstStep;
while (currentNode) {
  // Log the current node's data
  console.log(currentNode.data);
  // Move to the next node
  currentNode = currentNode.getNextNode();
}
