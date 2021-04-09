//Function
//- fundamental buildin block in the program
//- subprogram can be used multiple times
//- performs a task or calculates a value

//1. Function declaration
//function name(param1, param2) { body ... return; }
//one function === one thing
//naming: doSometiong, command, verb
//e.g. createCardAndPoint -> createCard, createPoint
//function is object in JS
function printHello()
{
    console.log('hello');
}
printHello();

function log(message)
{
    console.log(message);
}
log('hello@');
log(1234);

//2. Parameters
//primitive parameters: passed by value
//object parameters: passed by reference
function changeName(obj)
{
    obj.name = 'coder';
}
const lee = { name: 'lee' };
changeName(lee);
console.log(lee);

//3. Default parameters(added in ES6)
function showMessage(message, from = 'unknown')
{
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

//4. Rest parameters(added in ES6)
function printAll(...args)
{
    for (let i = 0; i < args.length; i++)
    {
        console.log(args[i]);
    }
}
printAll('dream', 'coding', 'ellie');

//5. Local scope
let globalMessage = 'global';
function printMessage()
{
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
}
printMessage();

//6. Return a value
function sum(a, b)
{
    return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${result}`);

//7. Early return, early exit

//First-class function
//functions are treated like any other variable
//can be assigned as a value to variable
//can be passed as an argument to other functions.
//can be returned by another function

//1. Function expression
//a function declaration can be called earlier than it is defined (hoisting)
//a function expression is created when the execution reaches it.
const print  = function () //anonymous function
{
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

//2. Callback function using function expression
function randomQuiz(answer, printYes, printNo)
{
    if (answer === 'love you')
    {
        printYes();
    }
    else
    {
        printNo();
    }
}

//anonymous function
const printYes = function ()
{
    console.log('Yes!');
}

//named function
//better debugging in debugger's stack traces
//recursions
const printNo = function print()
{
    console.log('No!');
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//Arrow function
//always anonymous
const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
console.log(add(1, 2));

//IIFEL Immediately Invoked Function Expression
(function hello()
{
    console.log('IIFE');
})();

//Quiz
//function calculate(command, a, b)
//command: add, substract, divide, multiply, remainder
function calculate(command, a, b)
{
    switch(command)
    {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('hello error');
    }
}
console.log(calculate('add', 1, 2));
console.log(calculate('substract', 1, 2));
console.log(calculate('divide', 1, 2));
console.log(calculate('a', 1, 2));