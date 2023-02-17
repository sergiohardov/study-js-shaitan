"use strict";

function counter(num = 0) {
  const increase = () => {
    num++;
    return num;
  };

  const decrease = () => {
    num--;
    return num;
  };

  const value = () => {
    return num;
  };

  return {
    value,
    increase,
    decrease,
  };
}

// Счетчик 1
const counterOne = counter();

counterOne.increase();
counterOne.increase();
counterOne.increase();
counterOne.decrease();

console.log(counterOne.value()); // Результат

// Счетчик 2
const counterTwo = counter(10);

counterTwo.increase();
counterTwo.increase();
counterTwo.increase();
counterTwo.decrease();

console.log(counterTwo.value()); // Результат
