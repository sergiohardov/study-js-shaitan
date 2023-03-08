"use strict";

const calculator = {
  read() {
    this.one = +prompt("Введите первое число:", "");
    this.two = +prompt("Введите второе число:", "");
  },
  sum() {
    return this.one + this.two;
  },
  mul() {
    return this.one * this.two;
  },
};
