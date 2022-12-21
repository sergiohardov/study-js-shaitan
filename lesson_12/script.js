"use strict";

let message = null;

// Узнаем год
const year = prompt("Введите год своего рождения:");

if (year == null || isNaN(+year) || year.trim() == "") {
  alert("Жаль, что Вы не захотели ввести свой год рождения");
  message = `Твой возраст: Не указан`;
} else {
  message = `Твой возраст: ${new Date().getFullYear() - year}`;
}

// Узнаем город
const city = prompt("Введите город в котором вы живете:");

if (city == null || !isNaN(+city) || city.trim() == "") {
  alert("Жаль, что Вы не захотели ввести свой город");
  message += `\nТвой город: Не указан`;
} else {
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
}

// Узнаем спорт
const sport = prompt("Ваш любимый вид спорта:");

if (sport == null || !isNaN(+sport) || sport.trim() == "") {
  alert("Жаль, что Вы не захотели ввести свой любимый вид спорта");
  message += `\nТвой спорт: Не указан`;
} else {
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
}

alert(message);