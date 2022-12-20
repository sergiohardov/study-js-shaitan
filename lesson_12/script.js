"use strict";

/*
    Не совсем понял в каком случае: в самом начале или уже в конечном сообщении: "Если в каком-то из случаев он не захочет вводить информацию и нажмет Отмена, показать ему сообщение..." - сделал в конце, но при другом условии понимаю что можно после промпта написать условие на проверку null и вывести соответствующий alert

*/
const age = prompt("Введите год своего рождения:");
const city = prompt("Введите город в котором вы живете:");
const sport = prompt("Ваш любимый вид спорта:");

let message = null;

if (!isNaN(+age) && age != "" && age != null) {
  message = `Твой возраст: ${new Date().getFullYear() - age}`;
} else {
  message = `Жаль, что Вы не захотели ввести свой возраст`;
}

if (city != "" && city != null) {
  switch (city.toLowerCase()) {
    case "киев":
      message += "\nТы живешь в столице: Украины";
      break;
    case "минск":
      message += "\nТы живешь в столице: Бульбаш";
      break;
    case "москва":
      message += "\nТы живешь в столице: Русни";
      break;
    default:
      message += `\nТы живешь в городе: ${city}`;
      break;
  }
} else {
  message += `\nЖаль, что Вы не захотели ввести свой город`;
}

if (sport != "" && sport != null) {
  switch (sport.toLowerCase()) {
    case "футбол":
      message += "\nКруто! Хочешь стать Лионелем Месси";
      break;
    case "баскетбол":
      message += "\nКруто! Хочешь стать Майклом Джорданом";
      break;
    case "бокс":
      message += "\nКруто! Хочешь стать Мухаммедом Али";
      break;
    default:
      message += `\nТвой любимый вид спорта: ${sport}`;
      break;
  }
} else {
  message += `\nЖаль, что Вы не захотели ввести свой вид спорта`;
}

alert(message);
