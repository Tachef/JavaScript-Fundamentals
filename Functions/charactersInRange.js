function charactersInRange(charA, charB) {
    let numFromCharA = charA.charCodeAt(0);
    let numFromCharB = charB.charCodeAt(0);

    let startIndex = numFromCharA > numFromCharB ? numFromCharB : numFromCharA;
    let endIndex = numFromCharA > numFromCharB ? numFromCharA : numFromCharB;
    buff = "";

    for (let i = startIndex + 1; i < endIndex; i++) {
        buff += String.fromCharCode(i) + " "
    }
    console.log(buff);

}
charactersInRange("a", "d")

// С масив и тернарен оператор
function charactersInRange(charA, charB) {
    let numFromCharA = charA.charCodeAt(0);
    let numFromCharB = charB.charCodeAt(0);

    let startIndex = numFromCharA > numFromCharB ? numFromCharB : numFromCharA;
    let endIndex = numFromCharA > numFromCharB ? numFromCharA : numFromCharB;
    //let startIndex = Math.min(numFromCharA, numFromCharB);
    //let endIndex = Math.max(numFromCharA, numFromCharB);

    let result = [];

    for (let i = startIndex + 1; i < endIndex; i++) {
        result.push(String.fromCharCode(i));
    }

    console.log(result.join(" "));
}

charactersInRange("a", "d");
