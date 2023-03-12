"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const ul = document.querySelector("ul");
  const attrValues = [];
  const attrKeys = [];
  const myName = "Sergio";

  //   1. Вытянуть все атрибуты которые есть в теге ul, перебрать их (for..of)
  //   и записать значение каждого атрибута в массив — вывести этот массив в консоль

  //   2. Так-же записать в отдельный массив каждое имя атрибута — вывести массив в консоль
  for (let attr of ul.getAttributeNames()) {
    attrValues.push(ul.getAttribute(attr));
    attrKeys.push(attr);
  }

  console.log(attrValues);
  console.log(attrKeys);

  // 3. С помощью JS изменить текст в последнем теге li на — «Привет меня зовут » + Ваше имя
  ul.lastElementChild.innerHTML = "Привет меня зовут " + myName;

  //   4. Добавить первому элементу li атрибут ‘data-my-name‘ со значением в котором будет лежать Ваше имя
  ul.firstElementChild.setAttribute("data-my-name", myName);

  //   5. Удалить у тега ul аттрибут ‘data-dog-tail‘
  ul.removeAttribute("data-dog-tail");
});
