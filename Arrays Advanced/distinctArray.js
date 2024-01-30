// First
function distinctArray(arr) {
    let uniqArr = [];
    for (let el of arr) {
        if (uniqArr.indexOf(el) === - 1) {
            uniqArr.push(el)
        }
    }
    console.log(uniqArr.join(' '));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
//Second  + comment for removed duplicates !
function distinctArray(arr) {
    let uniqArr = [];
    let removedElement = [];
    for (let el of arr) {
        if (!uniqArr.includes(el)) {
            uniqArr.push(el)
        } else {
            removedElement.push(el);
        }
    }
    arr = uniqArr;
    let comment = '';
    if (removedElement.length > 0) {
        comment = (`Removed duplicates ${removedElement.join(' ')}`);
    }
    console.log(`${uniqArr.join(' ')} : ${comment}`);
    
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);