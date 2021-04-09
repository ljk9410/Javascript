//1. Use strict
//added in ES5
//use this for Vanila Javascript.
'use strict';

//2. Variable, r/w
//let (added in ES6)
//Block Scope!
let globalName = 'global name';
{
    let name = 'jung kyu';
    console.log(name);
    console.log(`${globalName} in block scope`);
}
console.log(name);
console.log(globalName);

//var (don't ever use this)
//var hoisting(move declaration from bottom to top)
//var has no block scope

//3. constant, r(read only)
//favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes
const daysInWeek = 7;
const PI = 3.14;

//Note!
//Immutable data types: primitive types, frozen objects
//Mutable data types: all objects by default are mutable in JS

//4. Variable types
//primitive - single item: number, string, boolean, null, undefied, symbol
//object - box container
//function - first_class function
const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number - special numberic values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//string
const char = 'c';
const lee = 'Lee';
const greeting = 'hello ' + lee;
console.log(`value: ${greeting}, type: ${typeof greeting}`)

//boolean
//false: 0, null, undefined, Nan, ''
//true: any other value
const canRead = true;
const test = 3 < 1;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//nulll
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//object - real_life object, data structure
const jungKyu = {name: 'jungKyu', age: 20};
console.log(jungKyu.name);

//5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 3;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' / '2';
console.log(`value: ${text}, type: ${typeof text}`);

