"use strict";

const number = prompt("Введите число:");
const degree = prompt("Введите степень:");

function numDeg(n, d = 1) {
  if (isNaN(+n) || isNaN(+d) || n === null || d === null || n.trim() === "" || d.trim() === "") return "some error";

  return n ** d;
}

const result = numDeg(number, degree);

alert(result)
