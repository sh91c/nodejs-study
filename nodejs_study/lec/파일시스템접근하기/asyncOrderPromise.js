const fs = require('fs').promises;

// console.log('S T A R T!');
// fs.readFile('./readme2.txt')
//   .then((data) => {
//     console.log('1.', data.toString());
//     return fs.readFile('./readme2.txt');
//   })
//   .then((data) => {
//     console.log('2.', data.toString());
//     return fs.readFile('./readme2.txt');
//   })
//   .then((data) => {
//     console.log('3.', data.toString());
//     return fs.readFile('./readme2.txt');
//   })
//   .then((data) => {
//     console.log('4.', data.toString());
//     console.log('E N D');
//   })
//   .catch(err => console.log(err));

console.clear();

// async await 사용하기
async function main(){
  let data = await fs.readFile('./readme2.txt')
  console.log('1.', data.toString());
  data = await fs.readFile('./readme2.txt')
  console.log('2.', data.toString());
  data = await fs.readFile('./readme2.txt')
  console.log('3.', data.toString());
  data = await fs.readFile('./readme2.txt')
  console.log('4.', data.toString());
}
main();