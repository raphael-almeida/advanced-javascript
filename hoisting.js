/**
 * 
JavaScript Hoisting refers to the process whereby the interpreter 
appears to move the declaration of functions, variables or classes 
to the top of their scope, prior to execution of the code.
The following behaviors may be regarded as hoisting:
1. Being able to use a variable's value in its scope before the 
   line it is declared. ("Value hoisting")
2. Being able to reference a variable in its scope before the 
   line it is declared, without throwing a ReferenceError, 
   but the value is always undefined. ("Declaration hoisting")
3. The declaration of the variable causes behavior changes in 
   its scope before the line in which it is declared.

*/

console.log(sum(2, 5)); // prints '7'Ï
function sum(a, b) {
    return a + b;
}

console.log(message); // prints 'undefined'
var message = 'hello';

console.log(constMessage); // error: ReferenceError: Cannot access 'constMessage' before initialization
const constMessage = 'hi!';

console.log(letMessage);
let letMessage = 'greetings'; // error: ReferenceError: Cannot access 'letMessage' before initialization

const x = 1;
{
    console.log(x); // ReferenceError
    const x = 2;
}

{
    var y = 1;
}
console.log(y); // 1

function run() {
    function printMessage() {
        console.log('message one');
    }
    return printMessage();
    function printMessage() {
        console.log('message two');
    }
}

run(); // prints 'message two'