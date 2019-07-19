const Actions = require('./model');
const Contexts = require('../contexts/model');

exports.getById = async id => {
  const action = await Actions.findById(id).first();
  const contexts = await Contexts.findByIdOfAction(id);
  action.contexts = contexts;
  return action;
};

exports.create = action => {
  return Actions.create(action);
};
