const DoublyLinkedList = require('./DoublyLinkedList');

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
