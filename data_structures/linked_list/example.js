const LinkedList = require('./LinkedList');

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
