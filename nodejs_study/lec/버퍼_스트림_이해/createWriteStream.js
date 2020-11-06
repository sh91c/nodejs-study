const fs = require('fs');

const writeStream = fs.createWriteStream('./writeStream.txt');
writeStream.on('finish', () => {
  console.log('파일 쓰기 완료');
});

writeStream.write('WriteStream을 활용한 글 쓰기.\n');
writeStream.write('글 내용 채우기 테스트.');
writeStream.end();

// write(chunk 입력), end() 스트림 종료
// 스트림 종료시 finish 이벤트 발생