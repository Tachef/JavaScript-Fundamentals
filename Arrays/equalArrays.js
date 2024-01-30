// Функция equalArrays сравнява два масива и извежда информация за това дали те са идентични
// или къде се намира разликата, ако има такава.

function equalArrays(arr1, arr2) {
    // Инициализация на променливи equal и sum
    let equal = true;
    let sum = 0;

    // Преобразуване на всеки елемент от първия масив в число
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = Number(arr1[i]);
    }

    // Преобразуване на всеки елемент от втория масив в число
    for (let i = 0; i < arr2.length; i++) {
        arr2[i] = Number(arr2[i]);
    }

    // Сравнение на елементите на двата масива и извеждане на резултата
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at index ${i}`);
            equal = false;
            break;
        } else {
            sum += arr1[i];
        }
    }

    // Извеждане на резултата за идентичност и сума
    if (equal) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

// Пример на използване
equalArrays(['10', '20', '30'],
    ['10', '20', '30']);
