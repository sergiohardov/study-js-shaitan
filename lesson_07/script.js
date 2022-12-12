// Решение строго по задаче на данном этапе:

const hours = +prompt("Enter number of hours:", "");

function hoursInSeconds(h) {
  return h * 60 * 60;
}

alert(`In ${hours} hour(s) - ${hoursInSeconds(hours)} seconds`);



// Альтернативное решение с учетом того что пользователь ввел не число:

const hoursAlt = +prompt("Enter number of hours:", "");

function hoursInSecondsAlt(h) {
  if (isNaN(h)) {
    return "Value can be a number!";
  } else {
    return `In ${h} hour(s) - ${h * 60 * 60} seconds`;
  }
}

alert(hoursInSecondsAlt(hoursAlt));