const Project = require("../models/project");

module.exports = {
  getProjects: async (req, res) => {
    Project.findAll().then((projects) => {
      res.send(projects);
    });
  },
};
