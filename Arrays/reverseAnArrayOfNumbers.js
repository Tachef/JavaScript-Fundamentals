function reverseAnArrayOfNumbers(n, arr) {
    // Get first n elements from arr and reverse new arr
    let newArr = [];
    for (let i = n - 1; i >= 0; i--) {
        const element = arr[i]
        // Put them in another arr
        newArr.push(element);
    }
    // Print with space-separted !
    console.log(newArr.join(" "));
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])