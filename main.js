// at method

const animals = ["🦊", "🐶", "🐼"];

animals.at(4);
console.log(animals.at(1)); // 🐶

const arr = ["🦖", "🦕", "🐉", "🐓"];
console.log(arr.at(-1)); // 🐓

// with method
const fruits = ["🍎", "🍌", "🍇", "🍊"];
const newFruits = fruits.with(1, "🍓");
console.log(newFruits); // [ '🍎', '🍓', '🍇', '🍊'}
console.log(fruits); // [ '🍎', '🍌', '🍇', '🍊' ]
