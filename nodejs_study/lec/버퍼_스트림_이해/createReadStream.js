const fs = require('fs');
const readStream = fs.createReadStream('./readme.txt', {highWaterMark: 16});

// stream은 순서대로 조각내서 모여짐, 기본적으로 64KB씩 한번에 읽는다. highWatermark로 값 조절 가능
// 조각된 chunk들을 data배열에 push하면서 계속 합친다
const data = [];
readStream.on('data', (chunk) => {
  data.push(chunk);
  console.log('data: ', chunk, chunk.length, chunk.toString());
});
// (완료)끝났을 때 버퍼를 통해 내용 읽기
readStream.on('end', () => {
  console.log('end: ', Buffer.concat(data).toString());
});
// 비동기라서 에러처리 해야함
readStream.on('error', (err) => console.log('error: ', err));


// data(chunk 전달), end(전달 완료), error(에러 발생) || 이벤트 리스너처럼 사용