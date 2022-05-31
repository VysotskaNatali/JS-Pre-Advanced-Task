//     Завдання 1:
// Напишіть функцію яка приймає одне число. При першому виклику, вона його запам'ятовує,
// при другому - сумує з попереднім і так далі. Для виконання цього завдання використайте замикання.
// Наприклад:
// sum(3) = 3
// sum(5) = 8
// sum(228) = 236

function counter() {
  let num = 0;
  return function inner(step) {
    num = num + step;
    console.log(num);
  };
}
let sum = counter();
sum(3); //3
sum(5); //8
sum(228); //236

// Завдання 2:
// Напишіть модуть який буде обробляти покупку товарів. В модулі має бути тільки логіка, весь зв’язок з html,
// тобто кліки, зміна даних в html робити там не потрібно. Все має працювати як на відео shopsModule.
// Можете добавити додатковий функціонал від себе.
// В середині модуля використовуємо тільки логіку(змінні, функції і т.д.), ніякого зв’язку з DOM не має бути.

//---------------------- OLD

const shopsModule = (function () {
  let beerCount = 100;
  let wineCount = 50;
  let pepsiCount = 80;
  let beerPrice = 40;
  let winePrice = 250;
  let pepsiPrice = 26;
  let bank = 1000;

  function checkBank() {
    return `Balance: ${bank}грн`;
  }
  function checkBeer() {
    return `Beer: ${beerCount}шт`;
  }
  function checkWine() {
    return `Wine: ${wineCount}шт`;
  }
  function checkPepci() {
    return `Pepci: ${pepsiCount}шт`;
  }
  function sell(countBeer, countWine, countPepsi) {
    let checks = true;
    if (beerCount < countBeer) {
      alert(`Вибачте,але на складі залишилось Beer ${beerCount} штук`);
      checks = false;
    }
    if (wineCount < countWine) {
      alert(`Вибачте,але на складі залишилось Wine ${wineCount} штук`);
      checks = false;
    }
    if (pepsiCount < countPepsi) {
      alert(`Вибачте,але на складі залишилось Pepsi ${pepsiCount} штук`);
      checks = false;
    }
    if (checks) {
      beerCount -= countBeer;
      bank += countBeer * beerPrice;
      wineCount -= countWine;
      bank += countWine * winePrice;
      pepsiCount -= countPepsi;
      bank += countPepsi * pepsiPrice;

      return `
      Beer: ${countPepsi}шт
      Wine: ${countWine}шт
      Pepsi: ${countPepsi}шт
      Check: ${
        countBeer * beerPrice + countWine * winePrice + countPepsi * pepsiPrice
      }грн`;
    } else {
      return "Вибачте,перевірте своє замовлення";
    }
  }

  return {
    bank: checkBank,
    beer: checkBeer,
    wine: checkWine,
    pepci: checkPepci,
    sell: sell,
  };
})();

// console.log(shopsModule.sell(100, 10, 10)); //countBeer error
console.log(shopsModule.sell(15, 3, 80)); //Check
console.log(shopsModule.bank());
console.log(shopsModule.beer());
console.log(shopsModule.wine());
console.log(shopsModule.pepci());

//Es6

import * as shopsModule from "./shop.js";
console.log(shopsModule.sell(110, 10, 10)); //countBeer error
// console.log(shopsModule.sell(15, 3, 80)); //Check
console.log(shopsModule.checkBank());
console.log(shopsModule.checkBeer());
console.log(shopsModule.checkWine());
console.log(shopsModule.checkPepci());
