const db = require('../../data/db');

exports.create = action => {
  return db('Actions').insert(action);
}
