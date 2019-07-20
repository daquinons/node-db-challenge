const db = require('../../data/db');

exports.find = () => {
  return db('Actions');
};

exports.findById = id => {
  return db('Actions').where('id', id);
};

exports.findByIdOfProject = project_id => {
  return db('Actions')
    .select('*')
    .where('project_id', project_id);
};

exports.create = action => {
  return db('Actions').insert(action);
};

exports.update = (id, action) => {
  return db('Actions')
    .where('id', id)
    .update(action);
};

exports.delete = id => {
  return db('Actions')
    .where('id', id)
    .del();
};
