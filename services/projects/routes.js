const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({ message: 'GET projects' });
});

router.post('/', (req, res, next) => {
  res.json({ message: 'POST projects' });
});

module.exports = router;
