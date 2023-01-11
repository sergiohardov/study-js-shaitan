"use strict";

function padString(str, num, sym = "*", bool = true) {
  if (typeof str !== "string") return "some error";
  if (typeof num !== "number") return "some error";
  if (typeof sym !== "string" || sym.trim().length > 1) return "some error";
  if (typeof bool !== "boolean") return "some error";

  const diff = num - str.length;
  let result = str;

  if (diff > 0) {
    for (let i = 0; i < diff; i++) {
      bool ? (result = sym + result) : (result += sym);
    }
  } else {
    return str.substr(0, num);
  }

  return result;
}