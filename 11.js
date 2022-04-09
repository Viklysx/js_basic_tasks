var arrays = [[1, 2, 3], [4, 5], [6]];
// Ваш код тут
let newArray = arrays.reduce((previousValue, currentValue) => previousValue.concat(currentValue));
console.log(newArray)
// → [1, 2, 3, 4, 5, 6]