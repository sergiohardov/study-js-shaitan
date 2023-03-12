"use strict";

// При желании можно дописать в функцию аргумент count, и использовать ее внутри цикла вместо 100, тогда мы сможем управлять колличеством

function createTable() {
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");

  table.append(tbody);

  for (let i = 0; i < 100; i++) {
    if (i === 0 || i % 10 === 0) {
      const tr = document.createElement("tr");
      tbody.append(tr);
    }

    const td = document.createElement("td");
    td.innerHTML = i + 1;

    tbody.lastElementChild.append(td);
  }

  return table;
}
