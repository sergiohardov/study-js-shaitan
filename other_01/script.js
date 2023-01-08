"use strict";

const year = prompt("Введите число");
const arr = ["год", "года", "лет"];

if (isNaN(year) || year === null || year.trim() === "") {
  alert("Ошибочный ввод");
} else {
  if (year % 100 >= 5 && year % 100 <= 20) {
    alert(year + " " + arr[2]);
  } else if (year % 10 === 1) {
    alert(year + " " + arr[0]);
  } else if (year % 10 >= 2 && year % 10 <= 4) {
    alert(year + " " + arr[1]);
  } else {
    alert(year + " " + arr[2]);
  }
}
