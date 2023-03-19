"use strict";

(function () {
  document.addEventListener("DOMContentLoaded", () => {
    let data = localStorage.getItem(DATA_KEY);
    if (!data) return;

    data = JSON.parse(data);
    const ul = document.createElement("ul");

    Object.keys(data).forEach((key) => {
      const li = document.createElement("li");
      li.innerHTML = `${key}: ${data[key]}`;
      ul.append(li);
    });
    
    document.body.append(ul);
  });
})();
