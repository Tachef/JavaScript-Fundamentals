// first solution
function division(number) {
let division = 0;
    if (number % 10 === 0) {
        division = 10;
        console.log(`The number is divisible by ${division}`)
    } else if (number % 7 === 0) {
        division = 7;
        console.log(`The number is divisible by ${division}`);
    } else if (number % 6 === 0) {
        division = 6;
        console.log(`The number is divisible by ${division}`);
    } else if (number % 3 === 0) {
        division = 3;
        console.log(`The number is divisible by ${division}`);
    } else if (number % 2 === 0) {
        division = 2;
        console.log(`The number is divisible by ${division} `);
    } else {
        console.log(`Not divisible`);
    }
}   
division(15)


// second solution with FLAG !!!. This solution is better, because we don't have a lot of console.logs.
function division(number) {
    let division = 0;
    let flag = false;

    if (number % 10 === 0) {
        division = 10;
        flag = true;
    } else if (number % 7 === 0) {
        division = 7;
        flag = true;
    } else if (number % 6 === 0) {
        division = 6;
        flag = true;
    } else if (number % 3 === 0) {
        division = 3;
        flag = true;
    } else if (number % 2 === 0) {
        division = 2;
        flag = true;
    }

    if (flag) {
        console.log(`The number is divisible by ${division}`);
    } else {
        console.log('Not divisible')
    }
}
division(30)