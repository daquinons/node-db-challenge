const Actions = require('./model');
const Contexts = require('../contexts/model');

exports.get = async () => {
  return await Actions.find();
};

exports.getById = async id => {
  const action = await Actions.findById(id).first();
  const contexts = await Contexts.findByIdOfAction(id);
  action.contexts = contexts;
  return action;
};

exports.create = action => {
  return Actions.create(action);
};

exports.update = async (id, action) => {
  return await Actions.update(id, action);
};

exports.delete = async id => {
  return await Actions.delete(id);
};
