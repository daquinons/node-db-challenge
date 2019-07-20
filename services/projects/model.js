const db = require('../../data/db');

exports.find = () => {
  return db('Projects');
};

exports.findById = id => {
  return db('Projects')
    .select('*')
    .where('id', id);
};

exports.create = project => {
  return db('Projects').insert(project);
};

exports.update = (id, project) => {
  return db('Projects').where('id', id).update(project);
};

exports.delete = id => {
  return db('Projects').where('id', id).del();
};
