function range(start, finish, step = 1) {
    let massRange = [];

    if (start < finish) {
        for (let i = start; i <= finish; i += step) {
            massRange.push(i)
        }
    } else {
        for (let i = start; i >= finish; i += step) {
            massRange.push(i)
        }
    }
    return massRange;
}

function sum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

console.log(sum(range(1, 10)));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
