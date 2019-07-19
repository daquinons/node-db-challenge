const db = require('../../data/db');

exports.findByIdOfProject = project_id => {
  return db('Actions')
    .select('*')
    .where('project_id', project_id);
};

exports.create = action => {
  return db('Actions').insert(action);
}
