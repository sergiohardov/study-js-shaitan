"use strict";

const foo = [1, 2, 3, -1, -2, -3];

function get_positive_numbers(arr) {
  if (arr.length === 0) return "Array is empty";

  const exampleArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) exampleArr.push(arr[i]);
  }

  return exampleArr.length > 0 ? exampleArr : null;
}
