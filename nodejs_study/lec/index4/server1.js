const http = require('http');

const server = http.createServer((req, res) => {
  // 브라우저에서 html태그를 일반 문자열로 인식할 수 있기 떄문에 writeHead 작성
  res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8'});
  res.write('<h1>Hello Node!</h1>');
  res.write('<p>Hello Server</p>');
  res.end('<p>Hello SH</p>');
});
  // .listen(8081, () => {
  //   console.log('8081번 포트에서 서버 대기 중입니다.');
  // });
server.listen(8081);
server.on('listening', () => console.log('8081번 포트에서 서버 대기 중입니다!'));
// 비동기라서 에러 처리해야함
server.on('error', (error) => console.log(error));