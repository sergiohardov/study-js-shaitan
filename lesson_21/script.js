"use strict";

const mainFunction = (callback) => {
  const firstNum = +prompt("Введите первое число:", "");
  const secondNum = +prompt("Введите второе число:", "");

  callback(firstNum, secondNum);
};

const exponentiation = (numA, numB) => {
  const result = numA ** numB;
  alert(result);
};

const multiplay = (numA, numB) => {
  const result = numA * numB;
  alert(result);
};

const division = (numA, numB) => {
  const result = numA / numB;
  alert(result);
};

const modulo = (numA, numB) => {
  const result = numA % numB;
  alert(result);
};

mainFunction(exponentiation);
mainFunction(multiplay);
mainFunction(division);
mainFunction(modulo);
