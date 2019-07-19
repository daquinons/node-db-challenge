const Projects = require('./model');
const Actions = require('../actions/model');

exports.getById = async id => {
  const project =  await Projects.findById(id).first();
  const actions = await Actions.findByIdOfProject(id);
  project.actions = actions;

  return project
}

exports.create = project => {
  return Projects.create(project);
};
