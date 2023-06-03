const objFunction = {
    name: 'objFunction',
    func() {
        console.log('objFunction this', this);
        let regularFunction = function () {
            // object surrounding 'this' is the global object.
            console.log('inside regularFunction this', this);
        }
        regularFunction();
    }
}

// arrow functions are lexically bound

const objArrowFunction = {
    name: 'objArrowFunction',
    func() {
        console.log('objArrowFunction this', this);
        let arrowFunction = () => {
            // object surrounding 'this' is objArrowFunction
            console.log('inside arrowFunction this', this);
        }
        arrowFunction();
    }
}

objFunction.func();

console.log('\n')

objArrowFunction.func()