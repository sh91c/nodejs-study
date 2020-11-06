const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./readme.txt', {highWaterMark: 16});
// const zlibStream = zlib.createGzip(); // 압축
// const writeStream = fs.createWriteStream('./pipe_writeStream2.txt.gz');
const writeStream = fs.createWriteStream('./pipe_writeStream.txt');
readStream.pipe(writeStream);
// readStream.pipe(zlibStream).pipe(writeStream);

// 파이프끼리 다양하게 연결할 수 있다. 파이프를 지원하는 모듈끼리만 사용가능