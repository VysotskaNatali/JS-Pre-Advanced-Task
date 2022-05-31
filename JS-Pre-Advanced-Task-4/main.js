// Завдання 1:

// Реалізуйте клас Worker(Працівник),
// який буде мати такі властивості: firstName(ім'я),
// secondName (прізвище), rate(ставка за день роботи), days(кількість відпрацьованих днів).
// Також клас повинен мати метод getSalary(), який буде виводити зарплату працівника.
// Зарплата - це множення ставки rate на кількість відпрацьованих днів days.
// Ось так повинен працювати наш клас:
//      const worker = new Worker('Ivan', 'Ivanov', 10, 31);
//      console.log(worker.name); // виведе 'Ivan'
//      console.log(worker.surname); //виведе 'Ivanov'
//      console.log(worker.rate); //виведе 10
//      console.log(worker.days); //виведе 31
//      console.log(worker.getSalary()); //виведе 310 - тобто 10*31
// За допомогою нашого класу створіть двох робочих і знайдіть суму їх зарплат. Використовує cучасний class.

class Worker {
  constructor(firstName, secondName, rate, days) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.rate = rate;
    this.days = days;
  }
  getSalary() {
    return this.rate * this.days;
  }
}
// Перший працівник
const worker = new Worker("Ivan", "Ivanov", 10, 31);
console.log(worker.firstName); // 'Ivan'
console.log(worker.secondName); // 'Ivanov'
console.log(worker.rate); // 10
console.log(worker.days); // 31
console.log(worker.getSalary()); // 310 -  10*31

//Другий працівник
const worker1 = new Worker("Pavlo", "Pavliv", 21, 45);
console.log(worker1.firstName); // 'Pavlo'
console.log(worker1.secondName); // 'Pavliv'
console.log(worker1.rate); // 21
console.log(worker1.days); // 45
console.log(worker1.getSalary()); // 945 -  21*45

// Завдання 2:

//    Реалізуйте клас MyString, який матиме наступні методи: метод reverse(),
//  який параметром приймає рядок, а повертає її в перевернутому вигляді, метод ucFirst(),
//  який параметром приймає рядок, а повертає цю ж рядок, зробивши її першу букву заголовної та метод ucWords(),
//  який приймає рядок і робить капіталізації першої літери кожного слова цього рядка. Використовує cучасний class.
//          Наш клас повинен працювати так:
//       const str = new MyString();
//       console.log(str.reverse('IVAN')); //виведе 'NAVI'
//       console.log(str.ucFirst('arsenal')); //виведе 'Arsenal'
//       console.log(str.ucWords('arsenal arsenal arsenal')); //виведе 'Arsenal Arsenal Arsenal'

class MyString {
  constructor(name) {
    this.name = name;
  }
  reverse(name) {
    return name.split("").reverse().join("");
  }
  ucFirst(name) {
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
  }
  ucWords(name) {
    return name.toLowerCase().replace(/(^|\s)\S/g, function (leter) {
      return leter.toUpperCase();
    });
  }
}
const str = new MyString();
console.log(str.reverse("IVAN")); // 'NAVI'
console.log(str.ucFirst("arsenal")); // 'Arsenal'
console.log(str.ucWords("ARSENAL arsenal arsenal")); //'Arsenal Arsenal Arsenal'

// Завдання 3:
// Напишіть функцію CoffeeMake, яка буде мати в 2 методи: on(),off().
// Далі напишіть ще методи для 3х типів кавоварок: капельна, ріжкова, каво-машина,
// які будуть наслідувати базовий функціонал CoffeeMake, а також мати власний. Використовує cучасний class.

class CoffeeMake {
  constructor(coffeeVariety) {
    this.coffeeVariety = coffeeVariety;
  }
  on() {
    console.log(`Oберіть свій вид кави!`);
  }
  off() {
    console.log("Заберіть свій напій.Смачного!");
  }
}
class Drip extends CoffeeMake {
  constructor(coffeeVariety, filter) {
    super(coffeeVariety);
    this.filter = filter;
    console.log(`Coffee: ${this.coffeeVariety}, Filter: ${this.filter}`);
  }
}
let drip = new Drip("Arabika", "Paper Filter");
drip.on();
console.log(drip);
drip.off();

class Carob extends CoffeeMake {
  constructor(coffeeVariety, temperature) {
    super(coffeeVariety);
    this.temperature = temperature;
    console.log(
      `Coffee: ${this.coffeeVariety}, Temperature: ${this.temperature}℃`
    );
  }
}
let carob = new Carob("Brasilia", "95");
carob.on();
console.log(carob);
carob.off();

class Original extends CoffeeMake {
  constructor(coffeeVariety, milk) {
    super(coffeeVariety);
    this.milk = milk;
    console.log(`Coffee: ${this.coffeeVariety}, Milk: ${this.milk}`);
  }
}
let original = new Original("Facamara Honey", "Almond milk");
original.on();
console.log(original);
original.off();
