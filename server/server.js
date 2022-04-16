// api/server.js

const express = require("express");
const app = express();

const sequelize = require("./util/database");

const Project = require("./models/project");
const Log = require("./models/log");

const cors = require("cors");

Project.hasMany(Log);

sequelize
  .sync({ force: true })
  .then((result) => {
    return Project.create({ name: "Flutter", color: "#ff0000" });
    console.log(result);
  })
  .then((project) => {
    console.log("First Project Created: ", project);
    return project.createLog({
      description: "Watch Fireship Video 2",
      date: new Date(),
      beginTime: "19:00:10",
      endTime: "19:30:10",
    });
    console.log(project);
  })

  .then((log) => {
    console.log(log);
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());

app.get("/", function (req, res) {
  Project.findAll().then((projects) => {
    res.send(projects);
  });
});

app.listen(3000, () => {
  console.log("app listening on port 3000");
});
