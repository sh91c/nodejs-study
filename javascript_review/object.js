'use strict';

//Object = { key : value };
const obj1 = {}; // 'Object literal' 문법
const obj2 = new Object(); // 'Object constructor' 문법

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const sh = {
    name : 'sh',
    age  : 4
}
print(sh);

sh.hasJob = true;
console.log(sh.hasJob);

delete sh.hasJob;
console.log(sh.hasJob);

sh['hasJob'] = true;

// 2. Computed properties
console.log(sh.name); // 보편적으로 . 사용
console.log(sh['name']);
// 키를 통해 값을 확인하거나 받아올때 [] 주로 사용
function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(sh, 'name');
printValue(sh, 'age');

const person1 = {name : 'bob', age : 2};
const person2 = {name : 'steve', age : 3};
const person3 = {name : 'dave', age : 4};

const person4 = new Person('sh', 30);
console.log(person4);
// 순수하게 오브젝트 생성만을 위한 함수의 예 : Constructor function
function Person(name, age){
    this.name;
    this.age;
};

// for..in VS for..of
// for ( key in obj)
console.clear();
for (let key in sh){
    console.log(key);
}

// for (value of iterable)
// 순차적인 배열, 리스트에 사용
const arr = [1, 2, 4, 5];
for (const value of arr) {
    console.log(value);
} 

// coloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name : 'sh', age : '20'};
const user2 = user;
// user2.name = 'coder';
console.log(user); // coder로 변경되었음

// 복사하는 방법은? 1. old way
const user3 = {}; // 빈 오브젝트를 만듬
for(const key in user){
    user3[key] = user[key];
}
console.clear();
console.log(user3);

// 2. Object.assign 사용
const user4 = Object.assign({}, user);
console.log(user4)