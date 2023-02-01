"use strict";

// 1.
const task1_arr1 = [1, 2, 3];
const task1_arr2 = [4, 5, 6];
const task1_result = task1_arr1.concat(task1_arr2);

console.log("Задание #1:");
console.log(task1_result);

// 2.
const task2_arr = [1, 2, 3];
const task2_result = task2_arr.reverse();

console.log("Задание #2:");
console.log(task2_result);

// 3.
const task3_arr = [1, 2, 3];

task3_arr.push(4, 5, 6);

console.log("Задание #3:");
console.log(task3_arr);

// 4.
const task4_arr = [1, 2, 3];

task4_arr.unshift(4, 5, 6);

console.log("Задание #4:");
console.log(task4_arr);

// 5.
const task5_arr = ["js", "css", "jq"];
const task5_result = task5_arr.at(0);

console.log("Задание #5:");
console.log(task5_result);

// 6.
const task6_arr = ["js", "css", "jq"];
const task6_result = task6_arr.at(task6_arr.length - 1);

console.log("Задание #6:");
console.log(task6_result);

// 7.
const task7_arr = [1, 2, 3, 4, 5];
const task7_result = task7_arr.slice(0, 3);

console.log("Задание #7:");
console.log(task7_result);

// 8.
const task8_arr = [1, 2, 3, 4, 5];
const task8_result = task8_arr.slice(3, 5);

console.log("Задание #8:");
console.log(task8_result);

// 9.
const task9_arr = [1, 2, 3, 4, 5];
task9_arr.splice(1, 2);

console.log("Задание #9:");
console.log(task9_arr);

// 10.
const task10_arr = [1, 2, 3, 4, 5];
const task10_result = task10_arr.splice(1, 3);

console.log("Задание #10:");
console.log(task10_result);

// 11.
const task11_arr = [1, 2, 3, 4, 5];
task11_arr.splice(3, 0, "a", "b", "c");

console.log("Задание #11:");
console.log(task11_arr);

// 12. (Предполагаю что тут я допускаю ошибку)
const task12_arr = [1, 2, 3, 4, 5];
task12_arr.splice(1, 0, "a", "b");
task12_arr.splice(5, 0, "c");
task12_arr.push("e");

console.log("Задание #12:");
console.log(task12_arr);

// 13.
const task13_arr = [3, 4, 1, 2, 7];
const task13_result = task13_arr.sort();

console.log("Задание #13:");
console.log(task13_result);

// 14.
const task14_arr = [5, 6, 7, 8, 9];
let task14_result = 0;

task14_arr.forEach((item) => {
  task14_result += item;
});

console.log("Задание #14");
console.log(task14_result);

// 15.
const task15_arr = [5, 6, 7, 8, 9];
const task15_result = task15_arr.map((item) => item * 2);

console.log("Задание #15:");
console.log(task15_result);

// 16.
const task16_arr = [1, -3, 5, 6, -7, 8, 9, -11];
const task16_result = task16_arr.filter((item) => item < 0);

console.log("Задание #16:");
console.log(task16_result);

// 17.
const task17_arr = [1, -3, 5, 6, -7, 8, 9, -11];
const task17_result = task17_arr.filter((item) => item % 2 === 0);

console.log("Задание #17:");
console.log(task17_result);

// 18.
const task18_arr = ["aaa", "aaaqqq", "zzzqq", "zz", "qsa", "q", "az"];
const task18_result = task18_arr.filter((item) => item.length > 5);

console.log("Задание #18:");
console.log(task18_result);

// 19.
const task19_arr = [1, 2, [3, 4], 5, [6, 7]];
const task19_result = task19_arr.filter((item) => Array.isArray(item));

console.log("Задание #19:");
console.log(task19_result);

// 20.
const task20_arr = [5, -3, 6, -5, 0, -7, 8, 9];
let task20_result = 0;

task20_arr.forEach((item) => {
  if (item < 0) {
    task20_result++;
  }
});

console.log("Задание #20");
console.log(task20_result);
