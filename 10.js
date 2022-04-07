function deepEqual(objOne, objTwo) {
    if (objOne === objTwo) return true
    if (objOne === null || objTwo === null) return false;
    if (typeof objOne !== 'object' || typeof objTwo !== 'object') return false
    for (var key in objOne) {
        if ((key in objTwo) && deepEqual(objOne[key], objTwo[key])) {       
            return true;
        } else return false;
    }
    
}

var obj = {
    here: {
        is: "an"
    },
    object: 2
};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {
    here: 1,
    object: 2
}));
// → false
console.log(deepEqual(obj, {
    here: {
        is: "an"
    },
    object: 2
}));
// → true