"use strict";

const number = prompt("Введите число:");
let arr = [];

if (number < 1) {
  console.log(NaN);
} else {
  for (let i = 2; i < number; i++) {
    if (Number.isInteger(number / i)) arr.push(number / i);
  }

  !arr.length ? console.log("Число простое") : console.log(arr[arr.length - 1]);
}
