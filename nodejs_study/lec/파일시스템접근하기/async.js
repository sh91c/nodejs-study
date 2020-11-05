const fs = require('fs');

console.log('START START START START ');
fs.readFile('./readme2.txt', (err, data) => {
  if(err){
    throw err;
  }
  console.log('1번', data.toString());
});
fs.readFile('./readme2.txt', (err, data) =>{
  if(err){
    throw err;
  }
  console.log('2번', data.toString());
});
fs.readFile('./readme2.txt', (err, data) => {
  if(err){
    throw err;
  }
  console.log('3번', data.toString());
});
console.log('END END END END');
// 결과 : 순서가 마음대로임


// fs 모듈은 비동기로 처리함,, 순서 보장이 안됌
// 노드의 대부분 내장 모듈 메서드는 비동기 방식으로 처리