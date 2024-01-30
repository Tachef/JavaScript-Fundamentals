function catLife(input) {
    let text = input[0];
    let gender = input[1];
    let catYears = 0;
    let isCheck = false;

    if (text === "British Shorthair") {
        if( gender === "m") {
            catYears = 13;
        } else if(gender === "f") {
            catYears = 14;
        }
    } else if (text === "Siamese") {
        if (gender === "m") {
            catYears = 15;
        } else if (gender === "f") {
            catYears = 16;
        }
    } else if (text === "Persian") {
        if (gender === "m") {
            catYears = 14;
        } else if (gender === "f") {
            catYears = 15;
        }
    } else if (text === "Ragdoll") {
        if (gender === "m") {
            catYears = 16;
        } else if (gender === "f") {
            catYears = 17;
        }
    } else if (text === "American Shorthair") {
        if (gender === "m") {
            catYears = 12;
        } else if (gender === "f") {
            catYears = 13;
        }
    } else if (text === "Siberian") {
        if (gender === "m") {
            catYears = 11;
        } else if (gender === "f") {
            catYears = 12;
        }
    } else {
        console.log(`${text} is invalid cat!`)
        isCheck = true;
    }
    if (!isCheck) {
        catMonths = Math.ceil (catYears * 12 / 6);
        console.log(catMonths + " cat months")
    }
}
catLife(["Persian",
"f"])