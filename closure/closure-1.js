/**
 * A closure is the combination of a function bundled together (enclosed) 
 * with references to its surrounding state (the lexical environment). 
 * In other words, a closure gives you access to an outer function's scope
 * from an inner function. In JavaScript, closures are created every time 
 * a function is created, at function creation time.
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
 */

let view;
function initialize() {
    view = 'view';
    console.log('view has been set!');
}

initialize();
initialize();
initialize();
console.log(view);

let viewV2;
const initializeV2 = () => {
    let initialized = false;
    const setView = () => {
        if (initialized) {
            return;
        }
        viewV2 = 'viewV2';
        initialized = true;
        console.log('viewV2 has been set!')
    }
    return { setView }
}

const { setView } = initializeV2();
setView();
setView();
setView();