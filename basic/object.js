'use strict';

//Objects
//one of the JavaScript's data types.
//a collection of related data and/or functionality.
//Nearly all objects in JavaScript are instances of Object.
//Object = { key : value };


//1. Literals and properties
const obj1 = {};    //'object literal' syntax
const obj2 = new Object(); //'object constructor' syntex

function print(person)
{
    console.log(person.name);
    console.log(person.age);
}
const lee = {name: 'lee', age: 4};
print(lee);

//with JavaScript magic (dynamically typed language)
//can add properties later
lee.hasJob = true;
console.log(lee.hasJob);

//also can delete properties later
delete lee.hasJob;
console.log(lee.hasJob);

//2. Computed properties
//key should be always string
//동적으로 key의 value를 받아올 때 사용.
console.log(lee.name);
console.log(lee['name']);
lee['hasJob'] = true;
console.log(lee.hasJob);


function printValue(obj, key)
{
    console.log(obj[key]);
}
printValue(lee, 'name');
printValue(lee, 'age');

//3. Property value shorthand
const person1 = {name : 'bob', age : 2};
const person2 = {name : 'steve', age : 3};
const person3 = {name : 'dave', age : 4};
const person4 = new Person('lee', 4);
console.log(person4);

//4. Constructor function
function Person(name, age)
{
    this.name = name;
    this.age = age;
}

//5. In operator: property existence check (key in obj)
console.log('name' in lee);
console.log('age' in lee);
console.log('human' in lee);
console.log(lee.human);

//6. for..in vs for..of
//for (key in obj)
console.clear();
for (let key in lee)
{
    console.log(key);
}

//for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (let value of array)
{
    console.log(value);
}

//7. Cloning
//Object.assign(dest, [obj1, obj2, obj3, ...])
const user = {name: 'lee', age: 20};
const user2 = user;
console.log(user);
user2.name = 'coder';
console.log(user);

//old way
const user3 = {};
for (let key in user)
{
    user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

//another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed);