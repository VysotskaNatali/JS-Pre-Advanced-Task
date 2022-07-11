let data = prompt('Write number here');
let num = Number(data);
!num ? console.log(`Введіть число яке не 0`) :
    num % 2 ? console.log(`Число ${num} непарне`) :
        console.log(`Число ${num} парне`);
