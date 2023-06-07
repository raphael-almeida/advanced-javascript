
const wizard = {
    name: 'Merlin',
    health: 50,
    heal(increment1, increment2) {
        return this.health += (increment1 + increment2);
    }
}

const archer = {
    name: 'Robin Hood',
    health: 30
}

/**
 * call()
 * The call() method calls the function with a given this value and arguments provided individually.
 * Normally, when calling a function, the value of 'this' inside the function is the object that the 
 * function was accessed on. With call(), you can assign an arbitrary value as 'this' when calling 
 * an existing function, without first attaching the function to the object as a property. 
 * This allows you to use methods of one object as generic utility functions.
 */
console.log('before call', archer)
wizard.heal.call(archer, 30, 20)
console.log('after call', archer)


/**
 * apply()
 * The apply() method calls the specified function with a given this value, and arguments provided 
 * as an array (or an array-like object).
 */
console.log('before apply', archer)
wizard.heal.apply(archer, [4, 6])
console.log('after apply', archer)

/**
 * bind()
 * The bind() method creates a new function that, when called, has its this keyword set to the 
 * provided value, with a given sequence of arguments preceding any provided when the 
 * new function is called.
 */
console.log('before bind', archer)
const healArcher = wizard.heal.bind(archer, 1, 9)
healArcher()
console.log('after bind', archer)

/**
 * bind() and function currying
 */
function multiply(a, b) {
    return a * b
}

const multiplyByTwo = multiply.bind(this, 2)
console.log('3 multiplied by 2', multiplyByTwo(3))

const multiplyByTen = multiply.bind(this, 10)
console.log('9 multiplied by 10', multiplyByTen(9))

/**
 * 'this' keyword
 */
const a = {
    name: 'a',
    printThis() { console.log(this) }
}

const b = {
    name: 'b',
    printThis() { return function () { console.log(this) } }
}

const c = {
    name: 'c',
    printThis() { return () => console.log(this) }
}

console.log('a', a.printThis())
console.log('b', b.printThis()())
console.log('c', c.printThis()())


const character = {
    name: 'Simon',
    getCharacter() {
        return this.name;
    }
};
const giveMeTheCharacterNOW = character.getCharacter.bind(character);
console.log('?', giveMeTheCharacterNOW()); 
