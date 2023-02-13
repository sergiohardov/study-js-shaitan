"use strict";

// Task 1 //
function task_1(arr) {
  const result = [];
  for (let i = 0; i < arr.length - 1; i += 2) {
    result.push(`${arr[i]}+${arr[i + 1]}`);
  }

  return result.join(", ");
}
console.log(task_1(["a", "b", "c", "d"]));

// Task 2 //
function task_2(arr) {
  const result = [];
  for (let i = 0; i < arr.length - 1; i += 2) {
    result.push(arr[i] * arr[i + 1]);
  }

  return result.reduce((acc, num) => acc + num, 0);
}
console.log(task_2([2, 5, 3, 9]));

// Task 3 //
/* 
  Не совсем понял как правильно решить, такой ответ как: 
  const arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ]; console.log(arr[1][0]) 
  показался сильно простым, написал функцию:
*/
function task_3(arr, search) {
  for (let i = 0; i < arr.length; i++) {
    let j = arr[i].indexOf(search);

    if (j >= 0) return arr[i][j];
  }

  return "Число не найдено";
}
console.log(
  task_3(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    4
  )
);

// Task 4 //
/* 
  Не совсем понял как правильно решить, такой ответ как: 
  const obj = { js: ["jQuery", "Angular"], php: "hello", css: "world" }; console.log(obj.js[0]) 
  показался сильно простым, написал функцию:
*/
function task_4(data, search) {
  const arr = Object.values(data).flat();
  let result = arr.indexOf(search);

  if (result >= 0) {
    return arr[result];
  } else {
    return "Значение не найдено";
  }
}
console.log(
  task_4({ js: ["jQuery", "Angular"], php: "hello", css: "world" }, "jQuery")
);

// Task 5 //
function task_5(symbol, count) {
  const arr = [];
  let string = "";

  for (let i = 0; i < count; i++) {
    string += symbol;
    arr.push(string);
  }

  return arr;
}
console.log(task_5("x", 5));

// Task 6 //
function task_6(count) {
  const arr = [];

  for (let i = 1; i < count + 1; i++) {
    const result = new Array(i);

    result.fill(i);
    arr.push(result.join(""));
  }
  return arr;
}
console.log(task_6(4));

// Task 7 //
function arrayFill(symbol, count) {
  return new Array(count).fill(symbol);
}
console.log(arrayFill("x", 5));

// Task 8 //
function task_8(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];

    if (result > 10) return i + 1;
  }
}
console.log(task_8([2, 1, 1, 6, 9, 12, 3]));

// Task 9 //
function task_9(arr) {
  const arrRevers = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    arrRevers.push(arr[i]);
  }

  return arrRevers;
}
console.log(task_9([1, 2, 3, 4, 5]));

// Task 10 & 11 //
function task_10_11(arr) {
  let result = 0;
  arr.flat(Infinity).forEach((item) => {
    result += item;
  });
  return result;
}
console.log(task_10_11([[1, 2, 3], [4, 5], [6]]));
console.log(
  task_10_11([
    [
      [1, 2],
      [3, 4],
    ],
    [
      [5, 6],
      [7, 8],
    ],
  ])
);
