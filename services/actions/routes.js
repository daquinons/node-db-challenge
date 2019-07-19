const express = require('express');
const controllers = require('./controllers');

const router = express.Router();

router.post('/', async (req, res, next) => {
  const action = req.body;
  try {
    await controllers.create(action);
    res.status(201).json({ message: 'Action added to the database' });
  } catch (error) {
    next(new Error(error.message));
  }
});

module.exports = router;
