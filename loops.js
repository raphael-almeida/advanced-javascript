const ARRAY_SIZE = 1000000;
const SAMPLE_SIZE = 20;

const results = [];
const testLoop = (func, name) => {
    let result = 0;
    for (let i = 0; i < SAMPLE_SIZE; i++) {
        var arr = new Array(ARRAY_SIZE).fill(Math.random());
        const start = Date.now();
        func(arr);
        const end = Date.now();
        result += end - start;
    }
    return {
        name,
        average: result / SAMPLE_SIZE
    };

}

const classicFor = (arr) => {
    var res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i]);
    }
}
results.push(testLoop(classicFor, 'classic-for'));

const forIn = (arr) => {
    var res = [];
    for (var i in arr) {
        res.push(arr[i]);
    }
}
results.push(testLoop(forIn, 'for-in'));

const forOf = (arr) => {
    var res = [];
    for (let i of arr) {
        res.push(i);
    }
}
results.push(testLoop(forOf, 'for-of'));

const forEach = (arr) => {
    var res = [];
    arr.forEach((value, index) => {
        res.push(value);
    });
}
results.push(testLoop(forEach, 'forEach'));

const map = (arr) => {
    var res = arr.map(function (x) {
        return x;
    });
}
results.push(testLoop(map, 'map'));

const whileLoop = (arr) => {
    var res = [];
    x = arr.length;
    i = 0;
    while (i < x) {
        res.push(arr[i]);
        i++;
    }

}
results.push(testLoop(whileLoop, 'while'));

const doWhile = (arr) => {
    var res = [];
    x = arr.length;
    i = 0;
    do {
        res.push(arr[i]);
        i++;
    } while (i < x - 1);
}
results.push(testLoop(doWhile, 'do-while'));

results
    .sort((a, b) => a.average - b.average)
    .forEach((result) => console.log(`${result.name}: ${result.average}ms`));


// Results on MacBook Pro M1 2020, node v16.15.0 :
// do-while:    7.15ms
// for-of:      8.15ms
// while:       8.15ms
// classic-for: 8.8ms
// forEach:     17.25ms
// map:         35.1ms
// for-in:      95.9ms