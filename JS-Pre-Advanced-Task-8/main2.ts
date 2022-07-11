//  Завдання 2:
// Використовуючи конструкцію if..else через тернарний вираз, напишіть код, 
// який отримує число через prompt, а потім виводить в console.log() повідомлення:
// — Число парне.
// — Число непарне.
// — Число 0.

let data: any = prompt('Write number here');
let num: number = Number(data)

!num? console.log(`Введіть число яке не 0`):
num%2? console.log(`Число ${num} непарне`):
console.log(`Число ${num} парне`);