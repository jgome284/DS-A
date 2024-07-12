const { Node } = require('./data_structures/Node.js');
const LinkedList = require('./data_structures/LinkedList.js');
const DoublyLinkedList = require('./data_structures/DoublyLinkedList.js');
const Queue = require('./data_structures/Queue.js');

// Example of Nodes
console.log(
  '\nNode Example: \nWe can use the Mode class to create links between steps in a process'
);
const firstStep = new Node('1. Add item to shopping cart');
console.log(`\ninitialized node as first step: \n${firstStep}`);
const secondStep = new Node('2. Add delivery instructions');
console.log(`\ninitialized node as second step: \n${secondStep}`);
const thirdStep = new Node('3. Add payment method');
console.log(`\ninitialized node as third step: \n${thirdStep}`);

// link nodes as steps in process
console.log(`\nlinking nodes to each other...\n`);
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

console.log('\nLinked Lists Example: \nWe can store the seasons in a list...');
const seasons = new LinkedList();

console.log('\nPrint empty list: ');
seasons.printList();

console.log('\nAdding summer and spring to head of list...');
seasons.addToHead('summer');
seasons.addToHead('spring');
seasons.printList();

console.log('\nAdding fall and winter to tail of list...');
seasons.addToTail('fall');
seasons.addToTail('winter');
seasons.printList();

console.log('\nRemoving head from list...');
seasons.removeHead();
seasons.printList();

console.log(
  '\nDoubly Linked List Example: \nWe can model stops in a subway...'
);
const subway = new DoublyLinkedList();
console.log('\nComplete Route...\n');
subway.addToHead('TimesSquare');
subway.addToHead('GrandCentral');
subway.addToHead('CentralPark');
subway.addToTail('PennStation');
subway.addToTail('WallStreet');
subway.addToTail('BrooklynBridge');
subway.printList();

console.log(
  '\nCentral Park and Brooklyn Bridge stops are temporarily closed...Updating Route...\n'
);
subway.removeHead();
subway.removeTail();
subway.printList();

console.log(
  '\nTimes Square station is under construction...Updating Route...\n'
);
subway.removeByData('TimesSquare');
subway.printList();

console.log(
  '\nQueue Example: \nWe can model flights waiting their turn at a runway with a max of three waiting at a given time...\n'
);

const flights = [
  'Botswana Bird flight #345',
  'Singapore Skies flight #890',
  'Mexico Mirage flight #234',
  'Greenland Flying Seals flight #567',
];

const load = (flights) => {
  const runway = new Queue(3);

  flights.forEach((flight) => {
    try {
      runway.enqueue(flight);
      console.log(`${flight} taxi to runway.`);
    } catch (error) {
      console.log('Runway full!');
    }
  });
  return runway;
};

const clear = (runway) => {
  while (!runway.isEmpty()) {
    const cleared = runway.dequeue();
    console.log('\nFlights wait...\n');
    console.log(`${cleared}, is cleared for takeoff!\n${cleared} in air.`);
  }

  console.log('\nAll planes took off, runway clear.');
};

// Enqueue runway with planes
const runway = load(flights);
// Clear each plane to takeoff
clear(runway);
