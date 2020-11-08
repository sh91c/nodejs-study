const express = require('express');
const path = require('path');
const morgan = require('morgan');
const nunjucks = require('nunjucks');

const { sequelize } = require('./models'); // sequelize : ORM

const indexRouter = require('./routes/index');

const app = express();
app.set('port', process.env.PORT || 9090);
app.set('view engine', 'html'); // nunjucks engine


nunjucks.configure('views', {
  express : app,
  watch : true,
});

sequelize.sync({ force : false })
  .then(() => console.log('DB connected.'))
  .catch((err) => console.error(err.message)); // sequelize.sync를 통해서 mysql을 연결할 수 있다 ***


app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended : false }));


app.use('/', indexRouter);


app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.listen(app.get('port'), () => console.log(app.get('port'), '번 포트에서 대기 중'));