/* Given an array of strings, create a new array that contains the lengths of each string */

const greet = [
    "hello world",
    "hey ,there ",
    "whassupp",
    "Good Morning",
    "have a nice day"
]
const greet2 = new Array(greet)
greet.forEach(function(greet) {
  console.log(greet.toUpperCase());
});

// Using map
const upperCaseFruits = greet.map(function(greet) {
  return greet.toUpperCase();
});
console.log(upperCaseFruits)