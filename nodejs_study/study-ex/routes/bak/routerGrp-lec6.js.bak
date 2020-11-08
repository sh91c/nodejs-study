const express = require('express');
const router = express.Router();

// router.get('/', (req, res) => {
//   res.send('GET /abc');
// });

// router.post('/', (req, res) => {
//   res.send('POST /abc');
// });

// 위처럼 주소는 같지만 HTTP 메소드가 다를 때

router.route('/')
  .get((req, res) => {
    res.send('GET /abc');
  })
  .post((req, res) => {
    res.send('POST /abc');
  });

module.exports = router;