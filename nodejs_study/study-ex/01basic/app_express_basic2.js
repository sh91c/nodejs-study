const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();
// app.set
app.set('port', process.env.PORT || 9090);

// middleware들 간의 순서도 어느정도 중요함, 내부적으로 next()를 실행한다.
app.use(morgan('dev')); // 요청보냈을 때 어떻게 응답보냈는지 터미널에서 확인할 수 있음.
  // morgan('dev') : 간단하게, morgan('combined') : 배포시 자세한 로그

  // express.static
// app.use('요청경로', express.static(path.join(__dirname, 'public')));
app.use('/', express.static(path.join(__dirname, 'public')));

app.use(cookieParser());
  // *** body-parser *** -> *** express.json()
app.use(express.json()); // : 클라이언트에서 json 데이터를 보냈을 때 파싱해서 req.body로 넣어줌
app.use(express.urlencoded({extended : true})); // 클라이언트에서 form 데이터를 보낼 때. form parsing, extended는 쿼리스트링 파싱인데 ture 사용 

// route
app.get('/', (req, res) => {
    // *** COOKIE ***
  // req.cookies; // { mycookie : 'test' }
    // 쿠키를 암호화 하고 싶을 땐 위의 app.use(cookieParser(password)); 하고
    // req.signedCookies; 작성
  // 'Set-Cookie' : `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`
  // http로 서버 구현할 때 위와 같이 쿠키를 작성했다면 express에는 아래처럼 작성.. 좀 더 간결 편함
  // res.cookie('name', encodeURIComponent(name), {
  //   expires : new Date(),
  //   httpOnly : true,
  //   path : '/',
  // });
    // 쿠키를 삭제할 때 ***
  // res.clearCookie('name', encodeURIComponent(name), {
  //   httpOnly : true,
  //   path : '/',
  // });

    // body-parser = express.json() express.urlencoded({extended : true}) 미들웨어 쓴다면
  // req.body.name
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('*', (req, res) => {
  res.send('404 NOT FOUND');
});
// route end


app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send(err.message);
});

// app.listen
app.listen(app.get('port'), ()=>console.log(app.get('port'), '번 포트, 서버 대기 중'));