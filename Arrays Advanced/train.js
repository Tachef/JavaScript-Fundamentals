// First
function train(arr) {
    let wagon = arr.shift().split(" ").map(el => Number(el));
    //! Взимам елементите с shift, split с празно място, след като ги взема те са още стрингове и за това изпълнявам .map в/у всеки един от елементите и връща елемента като число.
    /*for (let i = 0; i < wagon.length; i++) {
        wagon[i] = Number(wagon[i])
    }*/
    let maxCapacity = Number(arr.shift());
    // Взимам капацитета на вагоните и ги обръщам към число.

    for (let el of arr) {
        let command = el.split(" "); // "add 10" -> ["add", "10"] // 30 -> ["30"]
        if (command[0] === "Add") {
            wagon.push(Number(command[1]))
        } else {
            let passengers = Number(command[0]);
            for (let i = 0; i < wagon.length; i++) {
                if (wagon[i] + passengers <= maxCapacity) {
                    wagon[i] += passengers;
                    break;
                }
            }
        }
    }
    console.log(wagon.join(' '));
}
train(['32 54 21 12 4 0 23',
    '75', 'Add 10', 'Add 0',
    '30', '10', '75']);


// Second
function train(arr) {
    let wagon = arr[0].split(" ").map(el => Number(el));
    /*for (let i = 0; i < wagon.length; i++) {
        wagon[i] = Number(wagon[i])
    }*/
    let maxCapacity = Number(arr[1])

    for (let i = 2; i < arr.length; i++) {
        let command = arr[i].split(" "); // "add 10" -> ["add", "10"] // 30 -> ["30"]
        if (command[0] === "Add") {
            wagon.push(Number(command[1]))
        } else {
            let passengers = Number(command[0]);
            for (let i = 0; i < wagon.length; i++) {
                if (wagon[i] + passengers <= maxCapacity) {
                    wagon[i] += passengers;
                    break;
                }

            }
        }
    }
    console.log(wagon.join(' '));
}
train(['32 54 21 12 4 0 23',
    '75', 'Add 10', 'Add 0',
    '30', '10', '75']);