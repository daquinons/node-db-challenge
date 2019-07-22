const express = require('express');
const projects = require('./projects');
const actions = require('./actions');

const router = express.Router();

router.use('/projects', projects);
router.use('/actions', actions);

router.get('/', (req, res, next) => {
  res.json({ message: 'API is up and running' });
});

module.exports = router;
