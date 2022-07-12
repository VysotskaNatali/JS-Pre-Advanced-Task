// Завдання 3:

// Написати розв’язок нижче описаного завдання за допомогою function declaration:
// — Потрібно створити функцію, яка повертає максимальний переданий їй числовий параметр.
// — Кількість параметрів у функції може бути від 2х і більше.
// Приклад роботи:
// — max(5,-2) – має повернути 5.
// — max(5,-2, 30, 6) – має повернути 30

function max(...arg: Array<number>): number{
    let maxNum:number = arg[0];
 for (let i = 0; i < arg.length; i++){
    maxNum = (maxNum < arg[i])? arg[i]:maxNum
 }
  return maxNum
}
console.log(max(5,-2, 30, 6));
console.log(max(5,-2));