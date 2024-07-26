const Stack = require('./Stack');

console.log(
  '\nStack Example: \nWe can model a max stack of 6 pizzas waiting for delivery...\n'
);
// 1. Define an empty pizza stack with a maxSize of 6
const pizzaStack = new Stack(6);

// 2. Add pizzas as they are ready until we fill up the stack
for (let i = 1; i <= 6; i++) {
  console.log(`Stacking Pizza #${i}`);
  pizzaStack.push(`Pizza #${i}`);
}

// 3. Try pushing another pizza to check for overflow
try {
  pizzaStack.push(`Pizza #7`);
} catch (e) {
  console.log(e.message);
}

// 4. Peek at the pizza on the top of stack and log its value
console.log(`\nThe first pizza to deliver is ${pizzaStack.peek()}\n`);

// 5. Deliver all the pizzas from the top of the stack down
for (let i = 1; i <= 6; i++) {
  console.log(`Delivered ${pizzaStack.pop()}`);
}

// 6. Try popping another pizza to check for empty stack
try {
  pizzaStack.pop();
} catch (e) {
  console.log(e.message);
}
