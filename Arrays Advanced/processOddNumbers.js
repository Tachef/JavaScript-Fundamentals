// First 
function processOddNumber(arr) {
    let newArr = arr.filter((x, i) => i % 2 !== 0)
    let doubleArr = newArr.map(x => x * 2);
    let result = [];
    for (let i = doubleArr.length - 1; i >= 0; i--) {
        result.push(doubleArr[i]);
    }
    return result.join(' ')
}
console.log(processOddNumber([3, 0, 10, 4, 7, 3]));

// Second
function processOddNumber(arr) {
    let newArr = arr.filter((x, i) => i % 2 !== 0)
    let doubleArr = newArr.map(x => x * 2);
    let result = doubleArr.reverse()
    return result.join(' ')
}
console.log(processOddNumber([3, 0, 10, 4, 7, 3]));

// Third
function processOddNumber(arr) {
    let newArr = arr.
        filter((x, i) => i % 2 !== 0)
        .map(x => x * 2)
        .reverse()
    return newArr.join(' ')
}
console.log(processOddNumber([3, 0, 10, 4, 7, 3]));