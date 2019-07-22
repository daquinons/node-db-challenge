const express = require('express');
const controllers = require('./controllers');

const router = express.Router();

router.get('/', async (req, res, next) => {
  const projects = await controllers.get();
  res.json(projects);
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

router.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const response = await controllers.getById(id);
    res.json(response);
  } catch (error) {
    next(new Error(error.message));
  }
});

router.put('/:id', async (req, res, next) => {
  const id = req.params.id;
  const project = req.body;
  try {
    const response = await controllers.update(id, project);
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
