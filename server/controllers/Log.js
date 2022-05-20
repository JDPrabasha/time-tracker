const Log = require("../models/log");
const Project = require("../models/project");

module.exports = {
  getLogs: async (req, res) => {
    Log.findAll({ include: Project, order: [['date', 'DESC']] }).then((logs) => {
      res.send(logs);
    });
  },
};
