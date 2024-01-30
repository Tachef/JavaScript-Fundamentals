function sortAndArray(arr) {
    arr.sort((a, b) => {
        if (a.length - b.length == 0) {
            return a.localeCompare(b);
        }
        return a.length - b.length
    })
    console.log(arr.join("\n"));
}
sortAndArray(['alpha', 'beta', 'gamma'])