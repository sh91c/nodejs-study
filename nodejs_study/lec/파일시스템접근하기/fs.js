const fs = require('fs').promises;

// 파일 읽기 : readFile

// fs.readFile('./readme.txt', (err, data) => {
//   if (err) {
//     throw err;
//   } 
//   console.log(data);
//   console.log(data.toString());
// });

// fs에서 promise를 사용하기 위해 .promises 지원
// fs.readFile('./readme.txt')
//   .then((data) => {
//     console.log(data);
//     console.log(data.toString());
//   })
//   .catch((err) => {
//     console.log(err);
//   });

  // 파일 쓰기 : wrtieFile

// fs.writeFile('./writeMe.txt', '내용을 작성하는 부분')
//   .then(() => {
//     return fs.readFile('./writeMe.txt');
//   })
//   .then((data) => {
//     console.log(data.toString());
//   })
//   .catch((err) => {
//     console.log(err);
//   });

fs.writeFile('./writeMe.txt', 'Write to do') // writeMe.txt 생성하면서 Write to do 작성
  .then(() => {
    return fs.readFile('./writeMe.txt'); // 생성이 완료되면 생성한 파일 읽어서
  })
  .then((data) => {
    console.log(data.toString()); // 출력하기
  })
  .catch((err) => console.log(err));