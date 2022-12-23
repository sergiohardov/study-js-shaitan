"use strict";

// Task 1
for (let i = 1; i <= 100; i++) {
  console.log(i);
}



// Task 2
let i = 100;
while (i >= 1) {
  console.log(i);
  i--;
}



// Task 3
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}



// Task 4
const arr = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum);



// Task 5
const arr2 = [1, 2, 3, 4, 5];
let sum2 = 0;

for (let i = 0; i < arr2.length; i++) {
  sum2 += Math.pow(arr2[i], 2);
}
console.log(sum2);
