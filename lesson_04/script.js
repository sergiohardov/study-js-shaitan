let action = prompt(
  "What action do you want to implement? Example: add, sub, mult, div",
  ""
).toLowerCase();
let a = +prompt("Enter first value:", "");
let b = +prompt("Enter second value:", "");

if (action == "add") {
  console.log(a + b);
} else if (action == "sub") {
  console.log(a - b);
} else if (action == "mult") {
  console.log(a * b);
} else if (action == "div") {
  console.log(a / b);
} else {
  console.log("Wrong input, please try again!");
}
