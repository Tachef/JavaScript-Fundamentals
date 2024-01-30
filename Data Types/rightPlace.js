function rightPlace(string, symbol, targetText) {
    let newString = "";
    for (let i = 0; i < string.length; i++) {
        if(string[i] === '_') {
            newString += symbol;
        } else{
            newString += string[i]
        }
    }
    console.log(newString === targetText ? 'Matched' : 'Not Matched'); // Съкратен вариант на if and Else 
}
rightPlace('Str_ng', 'I', 'Strong')