"use strict";

// Task 1 ======================
// let x = 10, y = 7;
// x > y ? console.log("x больше чем y") : console.log("x не больше, чем y");



// Task 2 ======================
// const num = +prompt("Введите число:");
// num % 2 === 0 ? console.log(`Число ${num} четное`) : console.log(`Число ${num} нечетное`);



// Task 3 ====================== <- интересно получить комментарий по вариантам :)
// Вариант 1
// const num = prompt("Введите число");
// let stat = null;

// if (!isNaN(num) && num != null && num != "") {
//   num[0] === "-" ? (stat = "отрицательное") : (stat = "положительное");

//   switch ((Math.abs(+num) + "").length) {
//     case 1:
//       alert(`Число ${num}: однозначное, ${stat}`);
//       break;
//     case 2:
//       alert(`Число ${num}: двуХзначное, ${stat}`);
//       break;
//     case 3:
//       alert(`Число ${num}: трехзначное, ${stat}`);
//       break;
//     default:
//       alert(`Число ${num}: более чем трехзначное, ${stat}`);
//       break;
//   }
// } else {
//   alert(`Вы не ввели число!`);
// }


// Вариант 2
// const num = prompt("Введите число:");

// function isPlusMinus(a) {
//   if (a > 0) {
//     return "Положительное";
//   } else if (a < 0) {
//     return "Отрицательное";
//   } else {
//     return "Не положительное и не отрицательное";
//   }
// }
// function isDigit(a) {
//   a = Math.abs(a) + "";
//   let result = null;

//   switch (a.length) {
//     case 1:
//       result = "Однозначное";
//       break;
//     case 2:
//       result = "Двузначное";
//       break;
//     case 3:
//       result = "Трехзначное";
//       break;
//     default:
//       result = "Более чем трехзначное";
//       break;
//   }

//   return result;
// }

// if (!isNaN(num) && num != null && num != "") {
//   alert(`Число ${num}: ${isPlusMinus(num)}, ${isDigit(num)}`);
// } else {
//   alert(`Вы не ввели число!`);
// }


// Вариант 3
// const num = prompt("Введите число");

// if (!isNaN(num) && num != null && num != "") {
//   num[0] === "-" ? alert(`Число ${num}: ${num.length - 1}-значное, отрицательное`) : alert(`Число ${num}: ${num.length}-значное, положительное`);
// } else {
//   alert(`Вы не ввели число!`);
// }



// Task 4 ======================
// const a = +prompt("Введите первое число:");
// const b = +prompt("Введите второе число:");
// const c = +prompt("Введите третее число:");

// if (a > b && a > c) {
//   alert("Первое число было большим: " + a);
// } else if (b > a && b > c) {
//   alert("Второе число было большим: " + b);
// } else if (c > a && c > b) {
//   alert("Третее число было большим: " + c);
// } else {
//   alert("Что то пошло не так... Тут точно были цифры?");
// }



// Task 5 ======================
// const a = +prompt("Введите первое число:");
// const b = +prompt("Введите второе число:");
// const c = +prompt("Введите третее число:");

// if (a + b < c || a + c < b || b + c < a) {
//   console.log("Треугольник упал...");
// } else {
//   console.log("Треугольник не упал)");
// }
