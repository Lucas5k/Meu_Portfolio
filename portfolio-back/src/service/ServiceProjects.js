const ModelProjects = require('../model/ModelProjects');

const findProject = {
  find: async () => {
    const result = await ModelProjects.find();

    return result;
  },
};

module.exports = findProject;
