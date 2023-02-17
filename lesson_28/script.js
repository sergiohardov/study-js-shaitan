"use strict";

function multSum() {
  let result = 0;

  const sum = (num) => {
    result += num;
    return result;
  };

  return sum;
}

const sum = multSum();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
