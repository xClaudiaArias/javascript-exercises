const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
	return arr.reduce((acc, curr) => acc + curr, 0)
};

const multiply = function(arr) {
  return arr.reduce((acc, curr) => acc * curr, 1)
};

const power = function(x, y) {
	return x ** y
};

const factorial = function(x) {
	if (x < 0) return "Undefined or negative number";
  if (x === 0 || x === 1) return 1;

  let product = 1;
  for (let i = x; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

// # Exercise 12 - Calculator

// The goal for this exercise is to create a calculator that does the following:

// 1. `add()`: take two numbers and return their sum
// 2. `subtract()`: take two numbers and return the result after subtracting the second from the first
// 3. `sum()`: take an array of numbers and add all the numbers together
// 4. `multiply()`: take an array of numbers and multiply all the numbers together
// 5. `power()`: take two numbers (base and exponent) and return the result of raising the base to that exponent
// 6. `factorial()`: given a single number, find its [factorial](https://en.wikipedia.org/wiki/Factorial)

// Please fill out each function with your solution. Make sure to `return` the value so you can test it in Jest! To see the expected value, take a look at the `.spec.js` file that houses the Jest test cases.

