function reverseArray(array) {
    let newArray = [];
    for (let i = array.length-1; i >= 0; i--) {
        newArray.push(array[i])
    }
    return newArray;
}

function reverseArrayInPlace(array) {
    for (i = 0; i < array.length; i++) {
        array.splice(i, 0, array.pop());
    }
    return array;
}

console.log(reverseArray(["A", "B", "C"]));

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);