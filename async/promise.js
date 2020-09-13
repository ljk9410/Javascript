'use strict';

//Promise is a JavaScript object for asynchronous operation.
//state: pending(수행 중) -> fulfilled(완료) or rejected
//Producer vs Consumer

//1. Producer
//when new Promise is created, the executor runs automatically & immediately!!!
const promise = new Promise((resolve, reject) => {
    //doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        resolve('Consumer에게 넘겨 줄 value');
        // reject(new Error('no network'));
    }, 2000)
});

//2. Consumers: then, catch, finally
promise
    .then((value) => {
    console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => console.log('finally'));

//3. Promise chaining
const fetchNumber = new Promise ((resolve, reject) =>
{
    setTimeout(() => resolve(1), 1000);
})

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) =>
    {
        setTimeout(() => resolve(num - 1), 1000);
    });
})

//4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐔'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) =>
    {
        setTimeout(() => reject(new Error(`error ${hen} => 🥚`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) =>
    {
        setTimeout(() => resolve(`${egg} => 🍳`));
    });

getHen()
    .then(getEgg)
    .catch(error => {
        return '🍕';
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);