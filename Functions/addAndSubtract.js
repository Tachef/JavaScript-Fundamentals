// First solution !
function addAndSubtract(a, b, c) {
    let sumOfTwoNumbers = a + b;
    let subtract = sumOfTwoNumbers - c;
    return subtract;
}
console.log(addAndSubtract(23, 6, 10));

// Second
function addAndSubtract(a, b, c) {

    function sumTwoNumber(a, b) {
        return a + b;
    }

    function subtractTwoNumber(a, b) {
        return a - b;
    }

    let sum = sumTwoNumber(a, b)
    let subtract = subtractTwoNumber(sum, c)
    return subtract;
}
console.log(addAndSubtract(23, 6, 10));

// Third !
function addAndSubtract(a, b, c) {
    let sumTwoNumbers = (a, b) => a + b;
    let subtractTwoNumber = (a, b) => a - b;

    let sum = sumTwoNumbers(a, b);
    let subtract = subtractTwoNumber(sum, c);
    return subtract;
}
console.log(addAndSubtract(23, 6, 10));


function plusAndMinus(a, b, c) {
    let plusTwoNumbers = a + b;
    let minusNumbers = plusTwoNumbers - c;
    return minusNumbers.toFixed(2)
}
console.log(plusAndMinus(23, 6, 10));

