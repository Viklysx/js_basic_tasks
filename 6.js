function countBs(str, symbol) {
    let countB = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === symbol) countB++;
    }
    return countB;
}

console.log(countBs('bbBBBssbBBBBs', 's'));