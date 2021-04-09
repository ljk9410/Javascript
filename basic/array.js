'use strict';

//Array

//1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

//2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);

console.clear();
//3. Looping over an array

//a. for
for (let i = 0; i < fruits.length; i++)
    console.log(fruits[i]);

//b. for of
for (let fruit of fruits)
    console.log(fruit);

//c. forEach
fruits.forEach((fruit, index, array) => console.log(fruit));

//4. Addition, deletion, copy
//push: add an item to the end
fruits.push('orange', 'lemon');
console.log(fruits);

//pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift: add an item to the begining
fruits.unshift('melon');
console.log(fruits);

//shift: remove an item to the begining
fruits.shift();
console.log(fruits);

//Note!!! shift & unshift are much slower than pop, push!!!

console.clear();
//splice: remove an item by index position
fruits.push('orange', 'melon', 'lemon');
console.log(fruits);
fruits.splice(1, 1, 'a', 'b', 'c');
console.log(fruits);

//concat: combine two arrays
const fruits2 = ['tomato']
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5. Searching
//find the index
console.clear();
console.log(fruits);

//indexOf
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('coconut'));

//includes
console.log(fruits.includes('coconut'));
console.log(fruits.includes('orange'));

//lastIndexOf
console.clear();
fruits.splice(1, 3);
fruits.push('apple');
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.lastIndexOf('apple'));