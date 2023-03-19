"use strict";

void (function () {
  const form = document.querySelector("#form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const { target } = e;
    const inputs = target.querySelectorAll("input, select, textarea");
    const data = Array.from(inputs).reduce((acc, { name, value }) => {
      acc[name] = value;
      return acc;
    }, {});

    localStorage.setItem(DATA_KEY, JSON.stringify(data));
  });

  document.addEventListener("DOMContentLoaded", () => {
    let data = localStorage.getItem(DATA_KEY);
    if (!data) return;

    data = JSON.parse(data);
    const inputs = form.querySelectorAll("input, select, textarea");
    inputs.forEach((item) => {
      item.value = data[item.name];
    });
  });
})();
