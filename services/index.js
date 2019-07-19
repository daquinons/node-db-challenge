const express = require('express');

const router = express.Router();

router.use('/', (req, res, next) => {
  res.json({ message: 'API is up and running' });
});

module.exports = router;
