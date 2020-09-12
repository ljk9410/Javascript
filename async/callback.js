'use strict';

//JavaScript is synchronous. -> 정해진 순서에 맞게 코드가 실행되는 것
//Execute the code block by orger after hoisting.
//hoisting: varm function declaration 등이 가장 위로 올라가는 것.
console.log('1');
setTimeout(() => console.log(`I'm a callback!`), 1000);
console.log('3');

//Synchronous callback
function printImmediately(print)
{
    print();
}
printImmediately(() => console.log('hello'));
//Asynchronous callback
function printWithDelay(print, timeout)
{
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);


//Callback Hell example
console.clear();
class UserStorage
{
    loginUser(id, password, onSuccess, onError)
    {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id == 'coder' && password === 'academy')
            ) {
                onSuccess(id)
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError)
    {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({name: 'ellie', role: 'admin'});
            } else {
                onError(new Error('on access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password, 
    (user) => {
        userStorage.getRoles(
            user,
            (userWithRole) => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            (error) => {console.log(error);}
        );
    },
    (error) => {console.log(error);}
);