"use strict";

function costOfBorsh(amountOfBorsh, potatoPrice) {
  const potatoWeigthOne = 0.075;
  const potatoInOneLitr = 4;

  const potatoNeedKilo = Math.ceil(
    amountOfBorsh * potatoInOneLitr * potatoWeigthOne
  );
  const potatoNeedMoney = potatoNeedKilo * potatoPrice;

  return {
    moneyPotato: potatoNeedMoney,
    kiloPotato: potatoNeedKilo,
    amountBorsh: amountOfBorsh,
  };
}

// Вариант вывода данных
const borsh = costOfBorsh(48, 13);

alert(
  `Что бы сварить ${borsh.amountBorsh}л борща вам нужно:\n- Денег: ${borsh.moneyPotato}грн\n- Картошки: ${borsh.kiloPotato}кг`
);
