// With return
function smallestOfThreeNumbers(a, b, c) {
    if (a <= b && a <= c) {
        return a;
    } else if (b <= a && b <= c) {
        return b;
    } else {
        return c;
    }
}
console.log(smallestOfThreeNumbers(2, 5, 3));

// With console.log
function smallestOfThreeNumbers(a, b, c) {
    if (a <= b && a <= c) {
        console.log(a)
    } else if (b <= a && b <= c) {
        console.log(b);
    } else {
        console.log(c);
    }
} 
smallestOfThreeNumbers(2, 5, 3);

// With Math method !
function smallestOfThreeNumbers2(a, b, c) {
    console.log(Math.min(a, b, c));
}
smallestOfThreeNumbers2(2, 5, 3)