function arrayToList(array) {
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

function prepend(element, list) {
    return {
        value: element,
        rest: list
    }
}

function nth(list, position) {
    // 1-й вариант решения

    // let array = listToArray(list);
    // if (array[position]) return array[position]
    // else return undefined;

    // 2-й вариант

    if (position > 0 && list.rest) {
        position--;
        list = list.rest;
        return nth(list, position); 
    } else if (position === 0) {
        return list.value;
    } else return undefined;
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
//→ {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20