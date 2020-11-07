const dotenv = require('dotenv');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
dotenv.config(); // 비밀 키, 서명 등을 .env 파일에서 관리할 수 있도록 사용하는 패키지

const app = express();

app.set('port', process.env.PORT || 9090);

app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'public')));
// app.use(cookieParser('test'));
app.use(cookieParser(process.env.COOKIE_SECRET)); // .env 파일에 COOKIE_SECRET(key) = password(value) 작성
// *** express-session ***
app.use(session({
  resave: false,
  saveUninitialized: false,
  // secret: 'test',//process.env.COOKIE_SECRET <- dotenv 패키지로 환경변수에 숨길 수 있음
  secret : process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
  name: 'session-cookie', // default : 'connect.sid'
}));
app.use(express.json());
app.use(express.urlencoded({extended : true})); 

// *** 미들 웨어간 데이터 전달하기 ***
app.use((req, res, next) => {
  req.data = '데이터 넣기'; // req.data : 요청 한번에 대해서만 데이터를 사용한다. req.session.data는 세션이 살아있을 경우 계속 남아있음
  next();
}, (req, res, next) => {
  console.log(req.data);
  next();
});
// *** 미들 웨어간 데이터 전달하기 *** END

// *** 미들웨어 확장하기 : 미들웨어 안에 미들웨어를 넣는 방법 1
// app.use(morgan('dev')); 또는
// app.use((req, res, next) => {
//   morgan('dev')(req, res, next);
// }); 또는
// app.use((req, res, next) => { // 익스프레스에서 자주 활용되는 미들웨어 확장법
//   if (process.env.NODE_ENV === 'production'){
//     morgan('combined')(req, res, next);
//   } else {
//     morgan('dev')(req, res, next);
//   }
// }); 같이 다양하게 활용 가능

app.get('/', (req, res) => {
  req.session.name = 'sh'; // 세션 등록
  req.sessionID; // 세션 아이디 확인
  // req.session.destroy(); 세션 모두 제거
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('*', (req, res) => {
  res.send('404 NOT FOUND');
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send(err.message);
});

app.listen(app.get('port'), ()=>console.log(app.get('port'), '번 포트, 서버 대기 중'));