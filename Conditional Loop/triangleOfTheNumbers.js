// first solution with method repeat !
function triangleOfTheNumbers(n) {
    for (let i = 0; i <= n; i++) {
        console.log(`${i} `.repeat(i))
    }
}
triangleOfTheNumbers(3)

// second solution
function triangleOfTheNumbers(n) {
    for (let i = 0; i <= n; i++) {
        let buff = "";
        for (let j = 0; j < i; j++) {
            buff += i + " ";
        }
        console.log(buff);
    }
}
triangleOfTheNumbers(3)