// With .indexOf()
function houseParty(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let commands = arr[i].split(" is ");
        let name = commands[0];
        let command = commands[1];
        if (command === "going!") {
            if (newArr.indexOf(name) === - 1) {
                newArr.push(name)
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else {
            if (newArr.indexOf(name) === - 1) {
                console.log(`${name} is not in the list!`)
            } else {
                newArr.splice(newArr.indexOf(name), 1);
            }
        }
    }
    console.log((newArr.join("\n")));
}
houseParty(['Tom is going!',

'Annie is going!',

'Tom is going!',

'Garry is going!',

'Jerry is going!']);


// With .includes()
function houseParty(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let commands = arr[i].split(" is ");
        let name = commands[0];
        let command = commands[1];
        if (command === "going!") {
            if (!newArr.includes(name)) {
                newArr.push(name)
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else {
            if (!newArr.includes(name)) {
                console.log(`${name} is not in the list!`)
            } else {
                newArr.splice(newArr.indexOf(name), 1);
            }
        }
    }
    console.log((newArr.join("\n")));
}
houseParty(['Tom is going!',

'Annie is going!',

'Tom is going!',

'Garry is going!',

'Jerry is going!']);
