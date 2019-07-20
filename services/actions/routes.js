const express = require('express');
const controllers = require('./controllers');

const router = express.Router();

router.get('/', async (req, res, next) => {
  const actions = await controllers.get();
  res.json(actions);
});

router.post('/', async (req, res, next) => {
  const action = req.body;
  try {
    await controllers.create(action);
    res.status(201).json({ message: 'Action added to the database' });
  } catch (error) {
    next(new Error(error.message));
  }
});

router.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const action = await controllers.getById(id);
    res.json(action);
  } catch (error) {
    next(new Error(error.message));
  }
});

router.put('/:id', async (req, res, next) => {
  const id = req.params.id;
  const action = req.body;
  try {
    const response = await controllers.update(id, action);
    res.json(response);
  } catch (error) {
    next(new Error(error.message));
  }
});

router.delete('/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const response = await controllers.delete(id);
    res.json(response);
  } catch (error) {
    next(new Error(error.message));
  }
});

module.exports = router;
