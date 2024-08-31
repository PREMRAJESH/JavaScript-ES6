/*
Promises:
A Promise in JavaScript represents the eventual completion or failure of an asynchronous operation. A promise can be in one of three states:

Pending: The initial state; the promise is neither fulfilled nor rejected.
Fulfilled: The operation completed successfully, and the promise has a resulting value.
Rejected: The operation failed, and the promise has a reason for the failure. 

Syntax: 
const makePromise = new Promise(function(resolve, reject) {
  // executor (the producing code, "singer")
});

*/

// Function simulating an asynchronous operation with possibility of rejection
const asyncOperation = (value, shouldReject = false) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldReject) {
          console.log(`Operation ${value} failed`);
          reject(`Error from operation ${value}`);
        } else {
          console.log(`Operation ${value} completed`);
          resolve(`Result from operation ${value}`);
        }
      }, Math.random() * 2000); // Simulating different durations for each operation
    });
  };
  
  // Create an array of promises representing multiple asynchronous operations (some may reject)
  const promises = [
    asyncOperation(1),
    asyncOperation(2, true), // Simulating a rejected operation
    asyncOperation(3),
    asyncOperation(4, true), // Simulating another rejected operation
  ];
  
  // Use Promise.all to handle the promises collectively
  Promise.all(promises)
    .then((results) => {
      console.log('All operations completed successfully');
      console.log('Results:', results);
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });
  