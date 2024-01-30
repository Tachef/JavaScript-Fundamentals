function sumEvenNumbers(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        // Преобразуваме текущия елемент в число
        let num = Number(arr[i]);

        // Проверяваме дали числото е четно
        if (num % 2 === 0) {
            sum += num;
        }
    }

    // Извеждаме сумата на четните числа
    console.log(sum);
}

// Пример на използване
sumEvenNumbers(['1', '2', '3', '4', '5', '6']);  // Очакван резултат: 12
