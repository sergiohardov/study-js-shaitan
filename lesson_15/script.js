"use strict";

const number = prompt("Введите число:");
let mark = 0;

if (isNaN(number) || number === null || number.trim() === "") {
  alert("Ошибочный ввод");
} else {
  for (let i = 1; i <= number; i++) {
    if (Number.isInteger(number / i)) mark++;
    if (mark > 2) break; // если делителя больше чем 2 не тратим лишнее время 
  }

  mark === 2 ? console.log(`${number} - ${true}`) : console.log(`${number} - ${false}`);
}
