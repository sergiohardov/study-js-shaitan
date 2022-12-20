"use strict";

/*
    1. Если переменная a равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.
*/
const a = 0;

switch (a) {
  case 0:
    console.log("Верно");
    break;
  default:
    console.log("Неверно");
    break;
}

/*
    2. Если переменная a больше нуля, то выведите ‘Верно’, иначе выведите ‘Неверно’.
*/
// const a = 1;

// a > 0 ? console.log("Верно") : console.log("Неверно");

/*
    3. Если переменная a меньше нуля, то выведите ‘Верно’, иначе выведите ‘Неверно’.
*/
// const a = -1;

// a < 0 ? console.log("Верно") : console.log("Неверно");

/*
    4. Если переменная a больше или равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.
*/
// const a = 1;

// if (a >= 0) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

/*
    5. Если переменная a меньше или равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.
*/
// const a = -12;

// if (a <= 0) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

/*
    6. Если переменная a не равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.
*/
// const a = 0;

// if (a != 0) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

/*
    Если переменная a равна ‘test’, то выведите ‘Верно’, иначе выведите ‘Неверно’.
*/
// const a = "test";

// switch (a) {
//   case "test":
//     console.log("Верно");
//     break;
//   default:
//     console.log("Неверно");
//     break;
// }

/*
    8. Если переменная a равна ‘1’ и по значению и по типу, то выведите ‘Верно’, иначе выведите ‘Неверно’.
*/
// const a = "1";

// if (a === 1) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

/*
    9. Если переменная a больше нуля и меньше 5-ти, то выведите ‘Верно’, иначе выведите ‘Неверно’.
*/
// const a = 4;

// if (a > 0 && a < 5) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

/*
    10. Если переменная a равна нулю или равна двум, то прибавьте к ней 7, 
    иначе поделите ее на 10. Выведите новое значение переменной на экран.
*/
// let a = 2;

// switch (a) {
//   case 0:
//     a += 7;
//     break;
//   case 2:
//     a += 7;
//     break;
//   default:
//     a /= 10;
//     break;
// }

// console.log(a);

/*
    11. Если переменная a равна или меньше 1, а переменная b больше или равна 3, 
    то выведите сумму этих переменных, иначе выведите их разность (результат вычитания).
*/
// const a = 2;
// const b = 5;

// if (a <= 1 && b >= 3) {
//   console.log(a + b);
// } else {
//   console.log(a - b);
// }
/*
    12. Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, 
    то выведите ‘Верно’, в противном случае выведите ‘Неверно’.
*/
// const a = 2;
// const b = 14;

// if ((a > 2 && a < 11) || (b >= 6 && b <= 14)) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

/*
    13. Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение ‘1’, 
    то в переменную result запишем ‘зима’, если имеет значение ‘2’ – ‘весна’ и так далее. Решите задачу через switch-case.
*/
// const num = 4;
// let result = null;

// switch (num) {
//   case 1:
//     result = "Зима";
//     break;
//   case 2:
//     result = "Весна";
//     break;
//   case 3:
//     result = "Лето";
//     break;
//   case 4:
//     result = "Осень";
//     break;
//   default:
//     result = "Неподходящее значение";
//     break;
// }
