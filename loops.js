const SIZE = 10000000;

var arr = new Array(SIZE).fill(Math.random());
function testFor(arr) {
    console.time('classic-for');
    var res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i]);
    }
    console.timeEnd('classic-for')
    return res;
}
testFor(arr);

var arr = new Array(SIZE).fill(Math.random());
function testForIn(arr) {
    console.time('for-in');
    var res = [];
    for (var i in arr) {
        res.push(arr[i]);
    }
    console.timeEnd('for-in')
    return res;
}
testForIn(arr);

var arr = new Array(SIZE).fill(Math.random());
function testForOf(arr) {
    console.time('for-of');
    var res = [];
    for (let i of arr) {
        res.push(i);
    }
    console.timeEnd('for-of')
    return res;
}
testForOf(arr);

var arr = new Array(SIZE).fill(Math.random());
function testForEach(arr) {
    console.time('forEach');
    var res = [];
    arr.forEach((value, index) => {
        res.push(value);
    });
    console.timeEnd('forEach');
    return res;
}
testForEach(arr);

var arr = new Array(SIZE).fill(Math.random());
function testMap(arr) {
    console.time('map');
    var res = arr.map(function (x) {
        return x;
    });
    console.timeEnd('map')
    return res;
}
testMap(arr);

var arr = new Array(SIZE).fill(Math.random());
function testWhile(arr) {
    console.time('While');
    var res = [];
    x = arr.length;
    i = 0;
    while (i < x) {
        res.push(arr[i]);
        i++;
    }
    console.timeEnd('While');
    return res;
}
testWhile(arr);

var arr = new Array(SIZE).fill(Math.random());
function testDoWhile(arr) {
    console.time('DoWhile');
    var res = [];
    x = arr.length;
    i = 0;
    do {
        res.push(arr[i]);
        i++;
    } while (i < x - 1);
    console.timeEnd('DoWhile');
    return res;
}
testDoWhile(arr);