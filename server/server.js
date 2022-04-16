const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const sequelize = require("./util/database");

const Project = require("./models/project");
const Log = require("./models/log");

//set up sequelize initialization

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

//set up /project route

const projectRoute = require("./routes/Project");

app.use("/project", projectRoute);

// verify connection to server

app.get("/", function (req, res) {
  res.send("Successfully connected to the server!");
});

app.listen(3000, () => {
  console.log("app listening on port 3000");
});
