"use strict";

function getPalindrom(num, steps = 1) {
  const numReverse = Number(String(num).split("").reverse().join(""));
  const result = num + numReverse;

  if (result === Number(String(result).split("").reverse().join(""))) {
    return {
      result,
      steps,
    };
  }

  return getPalindrom(result, steps + 1);
}
