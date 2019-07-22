const db = require('../../data/db');

exports.findByIdOfAction = action_id => {
  return db('ActionsContexts')
    .join('Contexts', 'ActionsContexts.context_id', 'Contexts.id')
    .select('context_id as id', 'Contexts.name')
    .where('action_id', action_id);
};
