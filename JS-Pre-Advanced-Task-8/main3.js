function max(...arg) {
    let maxNum = arg[0];
    for (let i = 0; i < arg.length; i++) {
        maxNum = (maxNum < arg[i]) ? arg[i] : maxNum;
    }
    return maxNum;
}
console.log(max(5, -2, 30, 6));
console.log(max(5, -2));
