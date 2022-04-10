function every(array, verifyFunction) {
    let flag = true;
    array.forEach(key => {
        if (verifyFunction(key) === false) flag = false;
    })
    return flag;
}

function some(array, verifyFunction) {
    let flag = false;
    array.forEach(key => {
        if (verifyFunction(key) === true) {
            flag = true;
            return flag;
        }
    })
    return flag;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false