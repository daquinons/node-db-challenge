const express = require('express');
const controllers = require('./controllers');

const router = express.Router();

router.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  const response = await controllers.getById(id);
  res.json(response);
});

router.post('/', async (req, res, next) => {
  const project = req.body;
  try {
    await controllers.create(project);
    res.status(201).json({ message: 'Project added to the database' });
  } catch (error) {
    next(new Error(error.message));
  }
});

module.exports = router;
