## Topics Covered

- **[Back 🔙](../README.md)**

# JavaScript Functions

## Introduction

A function in JavaScript is a block of code designed to perform a particular task. It is executed when "something" invokes (calls) it. Functions are fundamental building blocks in JavaScript, allowing you to encapsulate logic, reuse code, and organize your program into modular pieces.

## Table of Contents

1. [What is a Function?](#what-is-a-function)
2. [Function Declaration](#function-declaration)
3. [Function Expression](#function-expression)
4. [Arrow Functions](#arrow-functions)
5. [Parameters and Arguments](#parameters-and-arguments)
6. [Return Values](#return-values)
7. [Function Scope](#function-scope)
8. [Higher-Order Functions](#higher-order-functions)
9. [Anonymous Functions](#anonymous-functions)
10. [Immediately Invoked Function Expression (IIFE)](#immediately-invoked-function-expression-iife)
11. [Callback Functions](#callback-functions)
12. [Conclusion](#conclusion)

## What is a Function?

A function is a reusable block of code that performs a specific task. Functions help to structure your code, making it more readable, maintainable, and modular.

### Example:

```javascript
function greet() {
  console.log("Hello, World!");
}
```

In this example, `greet` is a function that logs "Hello, World!" to the console.

## Function Declaration

A function declaration defines a function with a specified name. It is hoisted, meaning it can be called before it is declared.

### Syntax:

```javascript
function functionName(parameters) {
  // code to be executed
}
```

### Example:

```javascript
function add(a, b) {
  return a + b;
}
```

## Function Expression

A function expression defines a function inside an expression and assigns it to a variable. Unlike function declarations, function expressions are not hoisted.

### Syntax:

```javascript
const functionName = function (parameters) {
  // code to be executed
};
```

### Example:

```javascript
const multiply = function (a, b) {
  return a * b;
};
```

## Arrow Functions

Arrow functions are a shorter syntax for writing function expressions. They do not have their own `this` context and are always anonymous.

### Syntax:

```javascript
const functionName = (parameters) => {
  // code to be executed
};
```

### Example:

```javascript
const divide = (a, b) => a / b;
```

## Parameters and Arguments

Parameters are placeholders in the function declaration, while arguments are the actual values passed to the function when it is called.

### Example:

```javascript
function subtract(a, b) {
  return a - b;
}

console.log(subtract(10, 5)); // 5
```

## Return Values

Functions can return a value using the `return` keyword. Once a `return` statement is executed, the function stops running and the value is returned.

### Example:

```javascript
function square(x) {
  return x * x;
}

console.log(square(4)); // 16
```

## Function Scope

Scope determines the accessibility of variables within a function. There are two types of scope in JavaScript: local and global.

### Example:

```javascript
let globalVar = "I am global";

function testScope() {
  let localVar = "I am local";
  console.log(globalVar); // Accessible
  console.log(localVar); // Accessible
}

testScope();
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined
```

## Higher-Order Functions

A higher-order function is a function that takes another function as an argument, returns a function, or both.

### Example:

```javascript
function applyOperation(a, b, operation) {
  return operation(a, b);
}

const result = applyOperation(5, 3, (x, y) => x + y);
console.log(result); // 8
```

## Anonymous Functions

Anonymous functions are functions without a name. They are often used as arguments to other functions.

### Example:

```javascript
setTimeout(function () {
  console.log("This is an anonymous function");
}, 1000);
```

## Immediately Invoked Function Expression (IIFE)

An IIFE is a function that is executed immediately after it is defined. It is commonly used to create a new scope.

### Example:

```javascript
(function () {
  console.log("This function runs immediately");
})();
```

## Callback Functions

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function.

### Example:

```javascript
function fetchData(callback) {
  // Simulating data fetch
  setTimeout(() => {
    callback("Data received");
  }, 2000);
}

fetchData(function (data) {
  console.log(data); // "Data received"
});
```
