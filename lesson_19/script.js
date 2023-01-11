"use strict";

const foo = [1, 2, 3, -1, -2, -3];

function get_positive_numbers(arr) {
  if (arr.length === 0) return "Array is empty";

  const resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) resultArr.push(arr[i]);
  }

  return resultArr.length > 0 ? resultArr : null;
}
