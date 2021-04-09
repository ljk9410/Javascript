//1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

//2. Numeric operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3);

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
//counter = counter + 1;
//preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
//postIncrement = counter;
//counter = counter + 1;
console.log(`preIncrement: ${postIncrement}, counter: ${counter}`);

//4.Assignment operators;
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

//5. Comparison operators
console.log(10 < 6);
console.log(10 > 6);
console.log(10 <= 6);
console.log(10 >= 6);

//6. Logical operators: ||, &&, !
const value1 = true;
const value2 = 4 < 2;

//|| - finds the first truthy value : 앞에서 true가 나왔다면 뒤에꺼를 무시하고 true를 return
console.log(`or: ${value1 || value2 || check()}`);

//&& - finds the first falsy value : 앞에서 false가 나왔다면 뒤에꺼를 무시하고 false를 return
console.log(`or: ${value1 && value2 && check()}`);

function check() {
    for (let i = 0; i < 10; i++)
        console.log('OMG');
    return true;
}

//7. Equality
const stringFive = '5';
const numberFive = 5;

//== loose equality - with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

//=== strict equality - no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality by reference
const lee1 = {name: 'lee'};
const lee2 = {name: 'lee'};
const lee3 = lee1;
console.log(lee1 == lee2);
console.log(lee1 === lee2);
console.log(lee1 === lee3);

//equality - puzzle
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

//8. Conditional operators: if
//if, else if, else
const name = 'ls';
if (name === 'lee')
    console.log('Welcome lee');
else if (name === 'coder')
    console.log('You are amazing coder');
else
    console.log('unknown');

//9. Ternary operator: ?
//condition ? value1 : value2;
console.log(name === 'lee' ? 'yes' : 'no');

//10. Switch statement
//use for multiple if checks
//use for enum-like value check
//use for multiple type checks in TS
const browser = 'IE';
switch (browser)
{
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

//11. Loops
//while loop, while the condition is truthy
//body code is excuted.
let i = 3;
while (i > 0)
{
    console.log(`while: ${i}`);
    i--;
}
//do while loop, body code is executed first,
//then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

//for loop, for(begin; condition; step)
for (i = 3; i > 0; i--)
    console.log(`for: ${i}`);

for (let i = 3; i > 0; i--)
    console.log(`inline variable for: ${i}`);

//nested loops
for (let i = 0; i < 5; i++)
{
    for (let j = 0; j < 5; j++)
    {
        console.log(`i: ${i}, j: ${j}`);
    }
}

//break, continue
//Q1. iterate from 0 to 10 and print only even numbers(use continue)
for (let i = 0; i < 11; i++)
{
    if (i % 2 === 0)
        console.log(i);
    else
        continue;
}

//Q2. iterate from 0 to 10 and print numbers until reaching 8(use break)
for (let i = 0; i < 11; i++)
{
    console.log(i);
    if (i === 8)
        break;
}