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

// groupBy method
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let grouped = {
  even: [],
  odd: [],
};

numbers.forEach((num) => {
  if (num % 2 === 0) {
    grouped.even.push(num);
  } else {
    grouped.odd.push(num);
  }
});

const groupedNumbers = Object.groupBy(numbers, (number) => {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
});
console.log(groupedNumbers); // { even: [ 2, 4, 6, 8 ], odd: [ 1, 3, 5, 7, 9 ] }

const wizards = ["Harry", "Hermione", "Ron", "Snape", "Dumbledore"];

const groupedByFirstLetter = Object.groupBy(wizards, (wizard) => wizard[0]);

console.log(groupedByFirstLetter); // { H: ['Harry', 'Hermione'], R: ['Ron'], S: ['Snape'], D: ['Dumbledore'] }

const avengers = [
  { name: "Iron Man", powerLevel: 500 },
  { name: "Hulk", powerLevel: 9000 },
  { name: "Thor", powerLevel: 4500 },
  { name: "Captain America", powerLevel: 2000 },
  { name: "Black Widow", powerLevel: 9999 },
];

const groupedByPowerLevel = Object.groupBy(avengers, (avenger) => {
  if (avenger.powerLevel <= 500) return "alpha";
  if (avenger.powerLevel <= 5000) return "beta";
  return "omega";
});

console.log(groupedByPowerLevel);
// -> {
//  "alpha": [{ "name": "Iron Man", "powerLevel": 500 }],
//  "omega": [{ "name": "Hulk", "powerLevel": 9000 }, { "name": "Black Widow", "powerLevel": 9999 }],
//  "beta": [{ "name": "Thor", "powerLevel": 4500 }, { "name": "Captain America", "powerLevel": 2000 }]
// }

// union method
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([2, 3, 4, 5, 6]);

const union = set1.union(set2);

console.log(union); // Set(1, 2, 3, 4, 5, 6)
