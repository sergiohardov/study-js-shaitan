// === Task #1 ===

const user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";

delete user.name;



// === Task #2 ===

/*
    Вопрос: Можно ли изменить объект, объявленный с помощью const?
    Ответ: Да, можно. (Это можно увидеть в первом таске на 7 строке)
*/



// === Task #3 ===

/*
    В задаче учителем был создан объект через let, за это мне сняли 10 баллов на ДЗ №2 - не хорошо)
*/

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const sum = salaries.John + salaries.Ann + salaries.Pete;




/*
    Более сложный вариант, если мы предусматриваем то что в обьекте будет больше свойств чем 3, 
    но есть недостаток, не учитывает вложенные обьекты, или другие типы данных, 
    можно дописать несколько условий\проверок что бы эта функция стала более универсальной)
*/

function sumSalaries(obj) {
  let result = null;

  for (let key in obj) {
    result += obj[key];
  }

  return result;
}

const sumAlt = sumSalaries(salaries);