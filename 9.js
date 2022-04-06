function arrayToList(array){
    return {
        value: array.shift(),
        rest: (array.length !== 0) ? arrayToList(array) : null
    }
}

function listToArray(list) {
    let array = [];
    array.push(list.value);
    do {
        list = list.rest;
        array.push(list.value);
    } while (list.rest !== null)
    return array;
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// // → [10, 20, 30]
// console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 1));
// // → 20