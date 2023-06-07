/**
 * Primitive types
 */
console.log('typeof 5', typeof 5)
console.log('typeof true', typeof true)
console.log('typeof "hello world"', typeof 'hello world')
console.log('typeof undefined', typeof undefined)
console.log('typeof null', typeof null)
console.log('typeof Symbol("this is a symbol")', typeof Symbol('this is a symbol'));

/**
 * Non-Primitive types
 */
console.log('{}', typeof {});
console.log('[]', typeof []);
console.log('function(){}', function () { });

/**
 * Standard built-in objects
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
 * 
 * Value properties
 * These global properties return a simple value. They have no properties or methods.
 * - globalThis
 * - Infinity
 * - NaN
 * - undefined
 * 
 * Function properties
 * These global functions—functions which are called globally, rather than on an object—directly 
 * return their results to the caller.
 * - eval()
 * - isFinite()
 * - isNaN()
 * - parseFloat()
 * - parseInt()
 * - decodeURI()
 * - decodeURIComponent()
 * - encodeURI()
 * - encodeURIComponent()
 * - escape() Deprecated
 * - unescape() Deprecated
 * 
 */