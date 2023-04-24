const array = [1, 2, 4, 10, 16];

const double = [];
// forEach only iterates over a collection
const newArray = array.forEach((num) => {
    double.push(num * 2);
})
console.log('newArray', newArray); // undefined
console.log('double', double); // [ 2, 4, 20, 32 ]

// maps creates a new array. The transformation function must return a value
const mapArray = array.map((num) => { return num * 2 });
console.log('mapArray', mapArray);

const filterArray = array.filter((num) => { return num > 5 });
console.log('filterArray', filterArray);

console.log('array', array);
const reduceResult = array.reduce((accumulator, num) => {
    console.log(`accumulator: ${accumulator} num: ${num}`);
    return accumulator + num;
});

console.log('reduceResult', reduceResult);