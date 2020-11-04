'use strict';

// Array

    // 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

    // 2. Index position : 검색, 삭제
const fruits = ['🍎','🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]); // 배열의 마지막 인덱스

console.clear();
    // 3. Looping over an array
// print all fruits
for(let index in fruits){
    console.log(fruits[index]);
}
console.clear();
for(let fruit of fruits){
    console.log(fruit);
}
console.clear();
// fruits.forEach(function(fruit, index, array){
//     console.log(fruit, index, array);
// })
fruits.forEach((fruit) => console.log(fruit));

console.clear();
    // 4. addition, deletion, copy
// push : add an item to the end
fruits.push('🍓','🍑');
console.log(fruits);

// pop : remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift : add an item to the beginning
fruits.unshift('🍍','🥝');
console.log(fruits);

// shift : remove an item to the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note !! shift, unshift are slower than pop, push
// 배열 앞에서 데이터를 넣거나 삭제한다면 기존데이터의 인덱스가 옮겨지기 때문 >>, <<

// splice : remove an item by index position
console.clear();
fruits.push('🍓','🍑','🍋');
console.log(fruits);
// splice(startIndex, delectCount?)
fruits.splice(1, 1);
console.log(fruits);
// 삭제한 후 해당 인덱스부터 데이터를 추가할 수도 있다.
fruits.splice(1, 1, '🍏', '🍉');
console.log(fruits);

// concat : combine two arrays, 리턴되기 때문에 변수로 받아야함
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

    // 5. Searching
// indexOf() : find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎')); // 데이터가 존재한다면 인덱스 리턴
console.log(fruits.indexOf('🍉'));
console.log(fruits.indexOf('🌭')); // 해당 데이터가 배열에 존재하지 않는다면 -1 리턴
// includes()
console.log(fruits.includes('🥥')); // 해당 데이터가 배열에 존재하는지 boolean 값을 리턴

// lastIndexOf
console.clear();
console.log(fruits);
fruits.push('🍎');
console.log(fruits.indexOf('🍎')); // 같은 데이터가 있다면 앞에있는 인덱스부터 찾아서 리턴
console.log(fruits.lastIndexOf('🍎')); // 배열의 끝부터 인덱스를 찾아 리턴

