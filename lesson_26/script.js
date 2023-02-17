"use strict";

// Task #1 //

function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

console.log(factorial(3));

// Task #2 //

function pow(num, degree) {
  if (degree <= 1) {
    return num;
  }

  return num * pow(num, degree - 1);
}

console.log(pow(2, 3));

// Task #3 //

function sum(a, b) {
  if (b === 0) return a;

  a++;

  return sum(a, b - 1);
}

console.log(sum(2, 5));
