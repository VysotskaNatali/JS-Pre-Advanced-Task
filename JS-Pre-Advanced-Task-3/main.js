// Завдання 1:
//   Напишіть функцію CoffeeMake, яка буде мати в 2 методи: on(),off().
//   Далі напишіть ще методи для 3х типів кавоварок: капельна, ріжкова, каво-машина,
//   які будуть наслідувати базовий функціонал CoffeeMake, а також мати власний.
//   Використовує класи до es6 стандарту.

function CoffeeMake(coffeeVariety, water ){
    this.coffeeVariety = coffeeVariety;
    this.water = water;
}
CoffeeMake.prototype.on = function(){
    console.log(`Oберіть свій вид кави!`);
}
CoffeeMake.prototype.off = function(){
    console.log('Заберіть свій напій.Смачного!');
}
function Drip(coffeeVariety, water, filter){
    CoffeeMake.call(this, coffeeVariety, water);
    this.filter = filter;
    console.log(`Coffee: ${this.coffeeVariety}, Filter: ${this.filter}`);
}

Drip.prototype = Object.create(CoffeeMake.prototype);
Drip.prototype.constuctor = Drip;
let drip = new Drip('Arabika','Water','Paper Filter');
drip.on()
console.log(drip);
drip.off()

function Carob(coffeeVariety, water,temperature){
    CoffeeMake.call(this, coffeeVariety, water);
    this.temperature = temperature;
    console.log(`Coffee: ${this.coffeeVariety}, Temperature: ${this.temperature}℃`);
}

Carob.prototype = Object.create(CoffeeMake.prototype);
Carob.prototype.constuctor = Carob;
let carob = new Carob('Brasilia','H2O','95');
carob.on()
console.log(carob);
carob.off()

function Original(coffeeVariety, water,milk){
    CoffeeMake.call(this, coffeeVariety, water);
    this.milk = milk;
    console.log(`Coffee: ${this.coffeeVariety}, Milk: ${this.milk}`);
}
Original.prototype = Object.create(CoffeeMake.prototype);
Original.prototype.constuctor = Original;
let original = new Original('Facamara Honey','Cristal Water','Almond milk');
original.on()
console.log(original);
original.off()