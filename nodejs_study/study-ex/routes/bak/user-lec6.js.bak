const express = require('express');

const router = express.Router();

// GET /user router
router.get('/', (req, res) => {
  res.send('Hello user');
});

// 라우트 매개변수
router.get('/:id', (req, res) => {
  console.log(req.params, req.query);
  res.redirect('/user');
});

module.exports = router;