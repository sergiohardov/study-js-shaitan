"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const lis = document.querySelectorAll("li");
  const liTextArr = [];

  console.log("1. Вывести каждый элемент списка в консоль:")
  for (let li of lis) {
    console.log(li);
    liTextArr.push(li.innerText);
  }

  console.log('2. Вывести общее колличество элементов в консоль:')
  console.log(lis.length);

  console.log('3. Вытянуть текст из тегов li, записать в массив и вывести в консоль:')
  console.log(liTextArr)
});
