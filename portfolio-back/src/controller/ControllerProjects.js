const ServiceProjects = require('../service/ServiceProjects');

const findProject = {
  find: async (_req, res) => {
    const result = await ServiceProjects.find();
    console.log(result);
    res.status(200).json(result);
  },
};

module.exports = findProject;

