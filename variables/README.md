## Topics Covered

- **[Back 🔙](../README.md)**

# Variables in JavaScript

Welcome to this comprehensive guide on **Variables in JavaScript**. This document covers everything you need to know about variables, including their declaration, scope, hoisting, and best practices. Whether you're a beginner or looking to refresh your knowledge, this guide will help you understand how variables work in JavaScript.

---

## Table of Contents

1. [Introduction](#introduction)
2. [Declaring Variables](#declaring-variables)
   - [var](#var)
   - [let](#let)
   - [const](#const)
3. [Differences Between var, let, and const](#differences-between-var-let-and-const)
4. [Variable Scope](#variable-scope)
   - [Global Scope](#global-scope)
   - [Function Scope](#function-scope)
   - [Block Scope](#block-scope)
5. [Hoisting](#hoisting)
6. [Data Types](#data-types)
7. [Variable Naming Conventions](#variable-naming-conventions)
8. [Best Practices](#best-practices)
9. [Examples](#examples)
10. [Additional Resources](#additional-resources)

---

## Introduction

In JavaScript, **variables** are containers that store data values. They act as labeled storage for data that can be manipulated and used throughout your code. Understanding how to declare and use variables effectively is fundamental to programming in JavaScript.

---

## Declaring Variables

JavaScript provides three keywords for declaring variables:

- `var`
- `let`
- `const`

Each has its own characteristics and use cases.

### var

- **Introduced in:** ES1 (Original JavaScript)
- **Scope:** Function-scoped
- **Redeclaration:** Allowed
- **Hoisting:** Yes (initialized with `undefined`)
- **Use Case:** Older codebases; generally discouraged in modern code.

**Syntax:**

```javascript
var variableName = value;
```

**Example:**

```javascript
var greeting = "Hello, World!";
console.log(greeting); // Output: Hello, World!
```

### let

- **Introduced in:** ES6 (ES2015)
- **Scope:** Block-scoped
- **Redeclaration:** Not allowed within the same scope
- **Hoisting:** Yes (but not initialized)
- **Use Case:** Preferred for variables that will be reassigned.

**Syntax:**

```javascript
let variableName = value;
```

**Example:**

```javascript
let count = 1;
count = 2;
console.log(count); // Output: 2
```

### const

- **Introduced in:** ES6 (ES2015)
- **Scope:** Block-scoped
- **Redeclaration:** Not allowed
- **Reassignment:** Not allowed
- **Hoisting:** Yes (but not initialized)
- **Use Case:** Preferred for variables that should remain constant.

**Syntax:**

```javascript
const variableName = value;
```

**Example:**

```javascript
const PI = 3.14159;
console.log(PI); // Output: 3.14159
```

**Note:** While you cannot reassign a `const` variable, if it's an object or array, you can mutate its properties or elements.

```javascript
const person = { name: "Alice", age: 25 };
person.age = 26; // This is allowed
console.log(person.age); // Output: 26
```

---

## Differences Between var, let, and const

| Feature             | `var`                              | `let`                                   | `const`                                            |
| ------------------- | ---------------------------------- | --------------------------------------- | -------------------------------------------------- |
| Scope               | Function-scoped                    | Block-scoped                            | Block-scoped                                       |
| Redeclaration       | Allowed                            | Not allowed                             | Not allowed                                        |
| Reassignment        | Allowed                            | Allowed                                 | Not allowed                                        |
| Hoisting            | Yes (initialized with `undefined`) | Yes (uninitialized, Temporal Dead Zone) | Yes (uninitialized, Temporal Dead Zone)            |
| Use Before Declared | Allowed (returns `undefined`)      | ReferenceError                          | ReferenceError                                     |
| Best Use Cases      | Legacy code, compatibility reasons | Variables that will change over time    | Constants and variables that should not be changed |

**Key Points:**

- **Scope:** `var` is function-scoped, meaning it is accessible throughout the function. `let` and `const` are block-scoped, meaning they are only accessible within the enclosing `{}`.
- **Redeclaration:** You can redeclare variables declared with `var`, but attempting to redeclare with `let` or `const` will result in an error.
- **Hoisting:** All declarations are hoisted, but `let` and `const` are not initialized, leading to a temporal dead zone where accessing them before declaration throws an error.

---

## Variable Scope

Scope determines the accessibility (visibility) of variables. JavaScript has three types of scope:

### Global Scope

Variables declared outside any function or block are in the global scope and accessible anywhere in the code.

**Example:**

```javascript
var globalVar = "I am global";

function display() {
  console.log(globalVar); // Accessible here
}

display(); // Output: I am global
console.log(globalVar); // Output: I am global
```

### Function Scope

Variables declared within a function using `var` are function-scoped and cannot be accessed outside that function.

**Example:**

```javascript
function showMessage() {
  var message = "Hello from function scope";
  console.log(message); // Output: Hello from function scope
}

showMessage();
console.log(message); // Error: message is not defined
```

### Block Scope

Variables declared inside a block (`{}`) using `let` or `const` are block-scoped.

**Example:**

```javascript
{
  let blockVar = "I exist only in this block";
  console.log(blockVar); // Output: I exist only in this block
}

console.log(blockVar); // Error: blockVar is not defined
```

**Function vs. Block Scope:**

```javascript
function test() {
  if (true) {
    var functionScoped = "Available in function";
    let blockScoped = "Available in block";
  }
  console.log(functionScoped); // Output: Available in function
  console.log(blockScoped); // Error: blockScoped is not defined
}

test();
```

---

## Hoisting

**Hoisting** is JavaScript's default behavior of moving declarations to the top of their scope before code execution.

- **`var` Hoisting:**
  - Declarations are hoisted and initialized with `undefined`.

**Example:**

```javascript
console.log(a); // Output: undefined
var a = 5;
```

- **`let` and `const` Hoisting:**
  - Declarations are hoisted but not initialized. Accessing them before declaration results in a **ReferenceError** due to the **Temporal Dead Zone**.

**Example:**

```javascript
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
```

**Best Practice:** Always declare variables at the top of their scope to avoid confusion and errors related to hoisting.

---

## Data Types

JavaScript variables can hold different data types:

### Primitive Data Types

1. **String**
   ```javascript
   let name = "John Doe";
   ```
2. **Number**
   ```javascript
   let age = 30;
   ```
3. **Boolean**
   ```javascript
   let isStudent = false;
   ```
4. **Null**
   ```javascript
   let emptyValue = null;
   ```
5. **Undefined**
   ```javascript
   let notAssigned;
   ```
6. **Symbol** (ES6)
   ```javascript
   let sym = Symbol("identifier");
   ```
7. **BigInt** (ES2020)
   ```javascript
   let bigInteger = 9007199254740991n;
   ```

### Object Data Types

1. **Object**
   ```javascript
   let person = { firstName: "Jane", lastName: "Doe" };
   ```
2. **Array**
   ```javascript
   let numbers = [1, 2, 3, 4, 5];
   ```
3. **Function**
   ```javascript
   function greet() {
     console.log("Hello!");
   }
   ```
4. **Date**
   ```javascript
   let today = new Date();
   ```

---

## Variable Naming Conventions

When naming variables, follow these rules and conventions:

### Rules

- **Allowed Characters:** Letters (a-z, A-Z), digits (0-9), underscores (\_), and dollar signs ($).
- **Cannot Start With:** Digits.
- **Case Sensitive:** `myVar` and `myvar` are different variables.
- **Reserved Words:** Cannot use JavaScript reserved keywords (e.g., `let`, `function`, `class`).

**Examples:**

```javascript
let firstName; // Valid
let _privateVar; // Valid
let $dollar; // Valid
let 2fast2furious; // Invalid
let for; // Invalid
```

### Conventions

- **Camel Case:** Commonly used in JavaScript.
  ```javascript
  let myVariableName;
  ```
- **Descriptive Names:** Choose meaningful and descriptive names.
  ```javascript
  let userAge;
  let totalPrice;
  ```
- **Constants in Uppercase:**
  ```javascript
  const MAX_USERS = 100;
  ```

---

## Best Practices

1. **Use `let` and `const` Instead of `var`:**

   - `let` and `const` provide block scope, reducing errors.
   - Use `const` by default; use `let` when you need to reassign.

2. **Declare Variables at the Top:**

   - Improves code readability and reduces hoisting-related issues.

3. **Initialize Variables When Declared:**

   - Helps avoid unexpected `undefined` values.

4. **Use Descriptive and Consistent Naming:**

   - Makes code easier to understand and maintain.

5. **Avoid Global Variables:**

   - Limits potential conflicts and unintended behaviors.

6. **Immutable Data with `const`:**
   - Use `const` for objects and arrays that should not be reassigned.
   - Be aware that object properties can still be modified.

**Example:**

```javascript
const user = { name: "Alice" };
user.name = "Bob"; // Allowed
user = { name: "Charlie" }; // Error
```

---

## Examples

### Example 1: Variable Declarations

```javascript
// var example
var city = "New York";
city = "Los Angeles"; // Reassignment allowed
var city = "Chicago"; // Redeclaration allowed

// let example
let country = "USA";
country = "Canada"; // Reassignment allowed
// let country = "Mexico"; // Error: Redeclaration not allowed

// const example
const continent = "North America";
// continent = "South America"; // Error: Reassignment not allowed
```

### Example 2: Scope Demonstration

```javascript
function testScope() {
  var x = 10;
  if (true) {
    var x = 20; // Same variable
    console.log(x); // Output: 20
  }
  console.log(x); // Output: 20
}

testScope();

function testBlockScope() {
  let y = 10;
  if (true) {
    let y = 20; // Different variable
    console.log(y); // Output: 20
  }
  console.log(y); // Output: 10
}

testBlockScope();
```

### Example 3: Hoisting

```javascript
console.log(a); // Output: undefined
var a = 5;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
```

---

## Additional Resources

- [MDN Web Docs - Variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#declarations)
- [W3Schools - JavaScript Variables](https://www.w3schools.com/js/js_variables.asp)
- [JavaScript.info - Variables](https://javascript.info/variables)
- [FreeCodeCamp - JavaScript Basics](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/)

