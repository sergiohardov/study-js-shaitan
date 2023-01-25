"use strict";

const fib = (n = 1) => {
  let arr = [0, 1];

  for (let i = 1; i < n; i++) {
    arr.push(arr[0] + arr[1]);
    arr.shift();
  }
  return arr[0];
};
