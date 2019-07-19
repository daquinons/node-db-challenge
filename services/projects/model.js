const db = require('../../data/db');

exports.findById = id => {
  return db('Projects')
    .select('*')
    .where('id', id);
};

exports.create = project => {
  return db('Projects').insert(project);
};
