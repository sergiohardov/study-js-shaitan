"use strict";

// indexOf
function altIndexOf(array, searchElement, fromIndex = 0) {
  if (!Array.isArray(array))
    throw new TypeError("Функция принимает только массив");

  if (fromIndex >= array.length) return -1;

  let start = fromIndex;

  if (typeof fromIndex !== "number") start = 0;

  if (fromIndex < 0) start = array.length - Math.abs(fromIndex);

  for (let i = start; i < array.length; i++) {
    if (array[i] === searchElement) return i;
  }

  return -1;
}

// lastIndexOf
function altLastIndexOf(array, searchElement, fromIndex = array.length) {
  if (!Array.isArray(array))
    throw new TypeError("Функция принимает только массив");

  if (array.length + fromIndex < 0) return -1;

  let start = fromIndex;

  if (typeof fromIndex !== "number") start = fromIndex;

  if (fromIndex < 0) start = array.length - Math.abs(fromIndex);

  for (let i = start; i >= 0; i--) {
    if (array[i] === searchElement) return i;
  }

  return -1;
}

// find
function altFind(array, callback, thisArg) {
  if (!Array.isArray(array))
    throw new TypeError("Функция принимает только массив");

  if (typeof callback !== "function")
    throw new TypeError("В коллбек должна быть передана функция");

  for (let i = 0; i < array.length - 1; i++) {
    if (callback.call(thisArg, array[i], i, array)) {
      return array[i];
    }
  }
  return undefined;
}

// findIndex
function altFindIndex(array, callback, thisArg) {
  if (!Array.isArray(array))
    throw new TypeError("Функция принимает только массив");

  if (typeof callback !== "function")
    throw new TypeError("В коллбек должна быть передана функция");

  for (let i = 0; i < array.length - 1; i++) {
    if (callback.call(thisArg, array[i], i, array)) {
      return i;
    }
  }
  return -1;
}

// includes
function altIncludes(array, searchElement, fromIndex = 0) {
  if (!Array.isArray(array))
    throw new TypeError("Функция принимает только массив");

  let start = fromIndex;

  if (fromIndex < 0) start = array.length + fromIndex;

  for (let i = start; i < array.length; i++) {
    if (array[i] === searchElement) return true;
  }
  return false;
}

// every
function altEvery(array, callback, thisArg) {
  if (!Array.isArray(array))
    throw new TypeError("Функция принимает только массив");

  if (typeof callback !== "function")
    throw new TypeError("В коллбек должна быть передана функция");

  for (let i = 0; i < array.length; i++) {
    if (array[i] === undefined) continue;

    if (!callback.call(thisArg, array[i], i, array)) return false;
  }

  return true;
}

// some
function altSome(array, callback, thisArg) {
  if (!Array.isArray(array))
    throw new TypeError("Функция принимает только массив");

  if (typeof callback !== "function")
    throw new TypeError("В коллбек должна быть передана функция");

  for (let i = 0; i < array.length; i++) {
    if (array[i] === undefined) return false;

    if (callback.call(thisArg, array[i], i, array)) return true;
  }

  return false;
}
