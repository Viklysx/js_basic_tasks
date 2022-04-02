function triangle() {
    for (let i = 1; i <= 7; i++) {
        let str = '';
        for (let j = 1; j <= i; j++) {
            str += '#'
        }
        console.log(str)
    }
}

triangle();