const express = require('express');

const router = express.Router();

router.post('/', (req, res, next) => {
  res.json({ message: 'POST actions' });
});

module.exports = router;
