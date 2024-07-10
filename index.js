const Node = require('./data_structures/Node.js')
const LinkedList = require('./data_structures/LinkedList.js')


// Example of Nodes
console.log('\nNode Example: \nWe can use the Mode class to create links between steps in a process')
const firstStep = new Node("1. Add item to shopping cart");
console.log(`\ninitialized node as first step: \n${firstStep}`)
const secondStep = new Node("2. Add delivery instructions");
console.log(`\ninitialized node as second step: \n${secondStep}`)
const thirdStep = new Node("3. Add payment method");
console.log(`\ninitialized node as third step: \n${thirdStep}`)

// link nodes as steps in process
console.log(`\nlinking nodes to each other...\n`)
firstStep.setNextNode(secondStep);
secondStep.setNextNode(thirdStep);


// print data for linked nodes
console.log('\nPrinting data for linked nodes...\n')
let currentNode = firstStep;
while (currentNode) {
    // Log the current node's data
    console.log(currentNode.data);
    // Move to the next node
    currentNode = currentNode.getNextNode();
}


console.log('\nLinked Lists Example: \nWe can store the seasons in a list...')
const seasons = new LinkedList();

console.log('\nPrint empty list: ')
seasons.printList();

console.log('\nAdding summer and spring to head of list...')
seasons.addToHead('summer');
seasons.addToHead('spring');
seasons.printList(); 

console.log('\nAdding fall and winter to tail of list...')
seasons.addToTail('fall');
seasons.addToTail('winter');
seasons.printList(); 


console.log('\nRemoving head from list...')
seasons.removeHead();
seasons.printList(); 

