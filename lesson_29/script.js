"use strict";

function numberGenerator() {
  const usedNumbers = [];

  const getNumber = () => {
    try {
      const number = Math.floor(Math.random() * 100) + 1; // +1 для того что бы у нас счет был от 1 до 100

      if (usedNumbers.includes(number)) {
        return getNumber();
      }

      usedNumbers.push(number);
      return number;
    } catch {
      return null;
    }
  };

  return {
    usedNumbers,
    getNumber,
  };
}

const number = numberGenerator();

for (let i = 1; i <= 100; i++) {
  console.log(number.getNumber());
}

// Что бы убедится в том что числа не повторяются, и строго от 1 до 100
console.log(
  number.usedNumbers.sort((a, b) => {
    return a - b;
  })
);
