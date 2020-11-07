const express = require('express');
const morgan = require('morgan');
const path = require('path');
const multer = require('multer');
const fs = require('fs');


const app = express();
app.set('port', process.env.PORT || 9090);

app.use(morgan('dev'));

// 서버 시작하기 전에 실행될 코드라서 sync 사용
try {
  fs.readdirSync('uploads');
} catch (error) {
  console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
  fs.mkdirSync('uploads');
}

const upload = multer({
  // 옵션이 여러개 있지만 자주 쓰이는 2개 storage, limits
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads/');
    },
    filename(req, file, done){
      const ext = path.extname(file.originalname); // 확장자 추출
      done(null, path.basename(file.originalname, ext) + Date.now() + ext); // 파일이름+날짜+확장자
      //   에러 , 경로
    },
  }),
  limits: { filesize : 50 * 1024 * 1024 },
});

app.get('/upload', (req, res) => {
  res.sendFile(path.join(__dirname, './multipart.html'));
});

// app.post('/upload', upload.single('image'), (req, res) => {
//   console.log(req.file);
//   res.send('ok');
// });

app.post('/upload', upload.array('image'), (req, res) => {
  console.log(req.files, req.body);
  res.send('ok');
});

app.get('/', (req, res, next) => {
  console.log('GET / 요청에서만 실행됩니다.');
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

app.listen(app.get('port'), () => console.log(app.get('port'),'번 포트에서 서버 대기 중..'));