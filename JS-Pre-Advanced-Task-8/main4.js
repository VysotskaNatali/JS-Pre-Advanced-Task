function getSqrt(number) {
    if (number < 0) {
        console.log('Введіть додатнє число');
    }
    else if (!number) {
        console.log(`Будь ласка, введіть число!`);
    }
    else {
        console.log(`Квадратний корінь з ${number}  дорівнює  ${Math.sqrt(number)}`);
    }
}
let nuM = prompt('Write number here');
getSqrt(Number(nuM));
