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
    return "Вибачте,перевірте своє замовлення ...";
  }
}
export { checkBank, checkBeer, checkWine, checkPepci, sell };
