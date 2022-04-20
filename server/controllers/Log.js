const Log = require("../models/log");
const Project = require("../models/project");

module.exports = {
  getLogs: async (req, res) => {
    Log.findAll({ include: Project }).then((logs) => {
      res.send(logs);
    });
  },
};
