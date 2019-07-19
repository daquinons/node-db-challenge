const Projects = require('./model');

exports.create = project => {
  return Projects.create(project);
};
