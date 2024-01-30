// First solution 
function integerAndFloat(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    if (sum % 1 === 0) { // Проверка  за целочислено число (Ако няма остатък значи е целочислено)
        sum += " - Integer";
    } else {
        sum += " - Float";
    }
    console.log(sum)
}
integerAndFloat(9, 100, 1.1)
integerAndFloat(100, 200, 300);

// Second solution

function integerAndFloat(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    let type = "Float";

    if (Number.isInteger(sum)) {
        type = "Integer"
    }
    console.log(`${sum} - ${type}`);
}
integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);