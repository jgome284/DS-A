const Queue = require('./Queue');

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
