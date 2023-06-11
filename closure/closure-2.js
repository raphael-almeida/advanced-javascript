const array = [1, 2, 3, 4]
for (var i = 0; i < array.length; i++) {
    setTimeout(function () {
        console.log('Index ' + i)
    }, 2000)
}
// prints:
// Index 4
// Index 4
// Index 4
// Index 4

// Solution 1: change var -> let
for (let i = 0; i < array.length; i++) {
    setTimeout(function () {
        console.log('Index ' + i)
    }, 2000)
}

// // Solution 2: use closure function
for (var i = 0; i < array.length; i++) {
    (function (closureI) {
        setTimeout(function () {
            console.log('Index ' + closureI)
        }, 2000)
    })(i)
}