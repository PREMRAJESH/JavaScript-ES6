/* Create an array of numbers and write functions to find the sum, average, and maximum value. */

// Create an array of numbers
const numbers = [10, 5, 8, 12, 7, 15];

// Function to find the sum of numbers
function findSum(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// Function to find the average of numbers
function findAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }

  const sum = findSum(arr);
  return sum / arr.length;
}

// Function to find the maximum value in numbers
function findMax(arr) {
  if (arr.length === 0) {
    return undefined; // Return undefined for an empty array
  }

  return Math.max(...arr);
}

// Test the functions
const sum = findSum(numbers);
const average = findAverage(numbers);
const max = findMax(numbers);

console.log("Numbers:", numbers);
console.log("Sum:", sum);
console.log("Average:", average);
console.log("Maximum Value:", max);

