const express = require('express');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 9090);
// 미들웨어 : 요청과 응답의 중간에 위치함
// app.use(req, res, next)가 미들웨어를 말하는 것이 아닌 {} 블록 코드가 미들웨어라는 것을 명심
// 매개변수는 req, res, next로 구성, 여기서 미들웨어를 실행하면 다음 라우터나 미들웨어를 실행하기 위해 next()를 사용해야함
// 기본적으로 위에서 아래로 순서대로 실행된다.
// app.use(미들웨어) : 모든 요청에서 미들웨어 실행
// app.get('/abc', 미들웨어) : abc로 시작하는 요청에서 미들웨어 실행
// app.post('/abc', 미들웨어) : abc로 시작하는 POST 요청에서 미들웨어 실행
// 미들웨어는 ,로 여러개 next()하여 사용할 수 있다

app.use((req, res, next) => {
  console.log('app.use : 모든 요청에 실행할 수 있는 미들웨어 작성법1');
  next();
});
// }, (req, res, next) => {
//   try {
//     console.log('에러발생');
//   } catch (error) {
//     next(error);
//   }
// }); -----------------------> // 에러는 try~catch로 잡고, next(error)를 사용한다.
// }, (req, res, next) => {
//   throw new Error('에러났음.'); // 에러 미들웨어는 라우터 작성 다음 영역에서 작성
// })
// }, (req, res, next) => {
//   console.log('app.use : 모든 요청에 실행할 수 있는 미들웨어 작성법2');
//   next();
// }, (req, res, next) => {
//   console.log('app.use : 모든 요청에 실행할 수 있는 미들웨어 작성법3');
//   next();
// });

app.get('/', (req, res) => {
  // res.send('Hello, Express');

  // sendFile을 사용하면 fs대신 외부 파일을 읽어올 수 있다.
  // path.join(__dirname) : 디렉토리 경로 /index.html을 불러옴
  res.sendFile(path.join(__dirname, '/index.html'));
  // res.render(); 이것도 응답을 보내는 것이라고 알아두자.
});

app.get('/about', (req, res) => {
  res.send('about 페이지 입니다.');
});
// route parameter : 라우트 매개변수(와일드카드) : requst.params : req.params.변수명
// app.get('/category/:name', (req, res) => { -----------> :name이 변수명이 됨
//   res.send(`hello ${req.params.name}`);
// });

// app.get('*', (req, res) => {
//   res.send('Hello Everybody!');
// })

app.use((req, res, next) => {
  res.status(404).send('404 not found');
});

// **** 에러 처리 미들웨어 작성 ***
app.use((err, req, res, next) => { // 반드시 매개변수 4개를 작성해야함
  console.log(err);
  res.status(500).send(err.message);
});

app.listen(app.get('port'), () => console.log(app.get('port'), '익스프레스 서버 실행'));