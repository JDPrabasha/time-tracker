const Project = require("../models/project");
const Log = require("../models/log");
const sequelize = require("sequelize");

module.exports = {
  getProjects: async (req, res) => {
    Project.findAll().then((projects) => {
      res.send(projects);
    });
  },

  addLog: async (req, res) => {
    // res.send(req.body);
    const logProject = await Project.findByPk(req.params.id);
    console.log(req);
    const log = {
      description: req.body.description,
      date: req.body.date,
      beginTime: req.body.beginTime,
      endTime: req.body.endTime,
    };
    logProject
      .createLog(log)
      .then(() => {
        res.send("Log added!");
      })
      .catch((err) => {
        res.send(err);
      });
  },

  addProject: async (req, res) => {
    const newProject = {
      name: req.body.name,
      color: req.body.color,
    };
    Project.create(newProject).then((result) => {
      res.send(result);
    });
  },

  getLogs: async (req, res) => {
    Project.findAll({ include: Log }).then((data) => {
      res.send(data);
    });
  },
};
