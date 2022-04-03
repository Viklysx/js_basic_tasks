function countBs(str) {
    let countB = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === "B") countB++;
    }
    return countB;
}

console.log(countBs('bbBBBssbBBBB'));

function countChar(str, symbol) {
    let countB = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === symbol) countB++;
    }
    return countB;
}

console.log(countChar('bbBBBssbBBBB', 's'));