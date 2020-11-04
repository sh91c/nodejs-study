'use strict';

// JavaScript is synchoronous.
// 호이스팅이 된 이후부터 동기적으로 실행됌
// hoisting : var, function 선언이 맨 위로 올라가서 실행되는 것
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

// Synchronous callback
function printImmediately(print){
    print();
}
printImmediately(() => console.log('hello'));
// Asynchroonus callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

console.clear();

// Callback HELL Callback HELL Callback HELL Callback HELL Callback HELL Callback HELL 
class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if (
                (id === 'sh' && password === '1234') ||
                (id === 'coder' && password === '1234')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('User NOT found.'));
            }
        }, 2000);
    }
    
    getRoles(user, onSuccess, onError){
        setTimeout(() => {
            if (user === 'sh'){
                onSuccess({name: 'sh', role: 'admin'});
            } else {
                onError(new Error('no accees'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your ID');
const password = prompt('enter your PASSWORD');
userStorage.loginUser(
    id,
    password,
    (user) => {
        userStorage.getRoles(
            user,
            (userWithRole) => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role.`)
            },
            (error) => {
                console.log(error)
            });
    },
    (error) => {
        console.log(error)
    });