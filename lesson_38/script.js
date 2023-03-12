"use strict";

function generateList(arr) {
  const ul = document.createElement("ul");

  arr.forEach((item) => {
    const li = document.createElement("li");

    if (Array.isArray(item)) {
      li.append(generateList(item));
    } else {
      li.innerHTML = item;
    }

    ul.append(li);
  });

  return ul;
}

console.log(generateList([1, 2, 3]));
console.log(generateList([1, 2, [1.1, 1.2, 1.3], 3]));
