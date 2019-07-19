const db = require('../../data/db');

exports.create = project => {
  return db('Projects').insert(project);
}
