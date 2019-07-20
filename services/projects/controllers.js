const Projects = require('./model');
const Actions = require('../actions/model');

exports.get = async () => {
  return await Projects.find();
};

exports.getById = async id => {
  const project =  await Projects.findById(id).first();
  const actions = await Actions.findByIdOfProject(id);
  project.actions = actions;

  return project
}

exports.create = async project => {
  return await Projects.create(project);
};

exports.update = async (id, project) => {
  return await Projects.update(id, project);
};

exports.delete = async id => {
  return await Projects.delete(id);
};
