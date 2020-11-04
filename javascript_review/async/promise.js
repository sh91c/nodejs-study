'use strict';

// Promise is a JavaScript object of Asynchronous operation.
// state(상태) : pending -> fulfilled state or rejected state
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically!
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files(비동기적으로 처리하는 것이 좋음))
    console.log('doing something...');
    setTimeout(()=>{
        // resolve('sh');
        reject(new Error('no network.'));
    }, 2000);
});

// 2. Use Promise = Consumers : then, catch, finally
// promise에서 resolve 콜백함수를 전달한 값이 value 파라미터로 전달됌
promise
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    })
    // resolve, reject 결과 상관없이 출력(받는 인자 없음)
    .finally(() => {
        console.log('finally')
    });

// 3. Promise Chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
})

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(()=> resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));

// 4. Error Handling
const getHen = () => 
    new Promise((resolve, reject) => {
        setTimeout(()=> resolve('🐓'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

getHen()
    .then(hen => getEgg(hen))
    .then(cook) // 암묵적으로 콜백함수를 전달할 때 받아온 value를 함수 인자로 호출하는 경우에는 생략 가능
    .then(console.log);